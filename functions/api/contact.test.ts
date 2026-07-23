/**
 * @jest-environment node
 */
import { describe, test, expect, jest as jestGlobal } from "@jest/globals";
import { onRequestPost, Env, EmailMessage } from "./contact";

type SendMock = jestGlobal.Mock<(message: EmailMessage) => Promise<unknown>>;

function makeRequest(body: unknown): Request {
  return new Request("https://neilmillard.com/api/contact", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(body),
  });
}

function makeEnv(send: SendMock): Env {
  return {
    EMAIL: { send },
    CONTACT_TO_EMAIL: "neil@neilmillard.com",
    CONTACT_FROM_EMAIL: "contact@neilmillard.com",
  };
}

describe("onRequestPost /api/contact", () => {
  test("sends an email and returns a success message for a valid submission", async () => {
    const send: SendMock = jestGlobal.fn<(message: EmailMessage) => Promise<unknown>>(() => Promise.resolve(undefined));
    const env = makeEnv(send);

    const response = await onRequestPost({
      request: makeRequest({ name: "Ada Lovelace", email: "ada@example.com", message: "Hello there" }),
      env,
    });

    expect(response.status).toBe(200);
    const data = await response.json();
    expect(data.message).toMatch(/thanks/i);

    expect(send).toHaveBeenCalledTimes(1);
    const sentMessage = send.mock.calls[0][0];
    expect(sentMessage.to).toBe("neil@neilmillard.com");
    expect(sentMessage.from.email).toBe("contact@neilmillard.com");
    expect(sentMessage.replyTo).toBe("ada@example.com");
    expect(sentMessage.text).toContain("Ada Lovelace");
    expect(sentMessage.text).toContain("Hello there");
  });

  test("rejects a submission missing the required name field", async () => {
    const send: SendMock = jestGlobal.fn<(message: EmailMessage) => Promise<unknown>>(() => Promise.resolve(undefined));
    const env = makeEnv(send);

    const response = await onRequestPost({
      request: makeRequest({ email: "ada@example.com", message: "Hello there" }),
      env,
    });

    expect(response.status).toBe(400);
    expect(send).not.toHaveBeenCalled();
  });

  test("rejects a submission missing the required email field", async () => {
    const send: SendMock = jestGlobal.fn<(message: EmailMessage) => Promise<unknown>>(() => Promise.resolve(undefined));
    const env = makeEnv(send);

    const response = await onRequestPost({
      request: makeRequest({ name: "Ada Lovelace", message: "Hello there" }),
      env,
    });

    expect(response.status).toBe(400);
    expect(send).not.toHaveBeenCalled();
  });

  test("silently accepts but does not send email when the honeypot field is filled", async () => {
    const send: SendMock = jestGlobal.fn<(message: EmailMessage) => Promise<unknown>>(() => Promise.resolve(undefined));
    const env = makeEnv(send);

    const response = await onRequestPost({
      request: makeRequest({ name: "Bot", email: "bot@example.com", message: "spam", _gotcha: "filled" }),
      env,
    });

    expect(response.status).toBe(200);
    expect(send).not.toHaveBeenCalled();
  });

  test("returns 400 for an unparsable request body", async () => {
    const send: SendMock = jestGlobal.fn<(message: EmailMessage) => Promise<unknown>>(() => Promise.resolve(undefined));
    const env = makeEnv(send);

    const request = new Request("https://neilmillard.com/api/contact", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: "not json",
    });

    const response = await onRequestPost({ request, env });

    expect(response.status).toBe(400);
    expect(send).not.toHaveBeenCalled();
  });

  test("returns 502 when the email provider fails", async () => {
    const send: SendMock = jestGlobal.fn<(message: EmailMessage) => Promise<unknown>>(() => Promise.reject(new Error("send failed")));
    const env = makeEnv(send);

    const response = await onRequestPost({
      request: makeRequest({ name: "Ada Lovelace", email: "ada@example.com", message: "Hello there" }),
      env,
    });

    expect(response.status).toBe(502);
  });
});
