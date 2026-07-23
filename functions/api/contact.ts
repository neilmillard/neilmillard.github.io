export interface Env {
  CF_ACCOUNT_ID: string;
  CF_EMAIL_API_TOKEN: string;
  CONTACT_TO_EMAIL: string;
  CONTACT_FROM_EMAIL: string;
}

interface ContactPayload {
  name?: string;
  email?: string;
  message?: string;
  _gotcha?: string;
}

interface RequestContext {
  request: Request;
  env: Env;
}

function jsonResponse(body: { message: string }, status: number): Response {
  return new Response(JSON.stringify(body), {
    status,
    headers: { "Content-Type": "application/json" },
  });
}

// Cloudflare Pages Functions don't support the `send_email` Worker binding
// (Pages config validation rejects it), so we call the Email Sending REST API instead.
async function sendContactEmail(
  env: Env,
  { name, email, message }: { name: string; email: string; message: string },
): Promise<void> {
  const response = await fetch(
    `https://api.cloudflare.com/client/v4/accounts/${env.CF_ACCOUNT_ID}/email/sending/send`,
    {
      method: "POST",
      headers: {
        Authorization: `Bearer ${env.CF_EMAIL_API_TOKEN}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        to: env.CONTACT_TO_EMAIL,
        from: { address: env.CONTACT_FROM_EMAIL, name: "neilmillard.com contact form" },
        reply_to: email,
        subject: `New contact form message from ${name}`,
        text: `Name: ${name}\nEmail: ${email}\n\n${message}`,
      }),
    },
  );

  if (!response.ok) {
    throw new Error(`Email Sending API returned ${response.status}`);
  }
}

export async function onRequestPost({ request, env }: RequestContext): Promise<Response> {
  let payload: ContactPayload;
  try {
    payload = await request.json();
  } catch {
    return jsonResponse({ message: "Invalid request body." }, 400);
  }

  // Honeypot field: bots fill it in, real users never see it. Accept quietly, send nothing.
  if (payload._gotcha) {
    return jsonResponse({ message: "Thanks for your message." }, 200);
  }

  const name = payload.name?.trim();
  const email = payload.email?.trim();
  const message = payload.message?.trim() ?? "";

  if (!name || !email) {
    return jsonResponse({ message: "Name and email are required." }, 400);
  }

  try {
    await sendContactEmail(env, { name, email, message });
  } catch {
    return jsonResponse({ message: "An error occurred. Please try again later." }, 502);
  }

  return jsonResponse({ message: "Thanks for your message, I'll be in touch soon." }, 200);
}
