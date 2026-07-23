export interface Env {
  BREVO_API_KEY: string;
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

// Brevo is Delta Famiglia's standard transactional email provider, so the
// contact form sends through the Brevo API rather than Cloudflare Email
// Sending (which Pages Functions can't bind to anyway).
async function sendContactEmail(
  env: Env,
  { name, email, message }: { name: string; email: string; message: string },
): Promise<void> {
  const response = await fetch("https://api.brevo.com/v3/smtp/email", {
    method: "POST",
    headers: {
      "api-key": env.BREVO_API_KEY,
      "Content-Type": "application/json",
      Accept: "application/json",
    },
    body: JSON.stringify({
      sender: { name: "neilmillard.com contact form", email: env.CONTACT_FROM_EMAIL },
      to: [{ email: env.CONTACT_TO_EMAIL }],
      replyTo: { email },
      subject: `New contact form message from ${name}`,
      textContent: `Name: ${name}\nEmail: ${email}\n\n${message}`,
    }),
  });

  if (!response.ok) {
    throw new Error(`Brevo API returned ${response.status}`);
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
