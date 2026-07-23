export interface EmailMessage {
  to: string;
  from: { email: string; name?: string };
  replyTo?: string;
  subject: string;
  text: string;
}

export interface Env {
  EMAIL: { send(message: EmailMessage): Promise<unknown> };
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
    await env.EMAIL.send({
      to: env.CONTACT_TO_EMAIL,
      from: { email: env.CONTACT_FROM_EMAIL, name: "neilmillard.com contact form" },
      replyTo: email,
      subject: `New contact form message from ${name}`,
      text: `Name: ${name}\nEmail: ${email}\n\n${message}`,
    });
  } catch {
    return jsonResponse({ message: "An error occurred. Please try again later." }, 502);
  }

  return jsonResponse({ message: "Thanks for your message, I'll be in touch soon." }, 200);
}
