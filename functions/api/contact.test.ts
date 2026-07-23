/**
 * @jest-environment node
 */
import { describe, test, expect, jest as jestGlobal, beforeEach, afterEach } from "@jest/globals";
import { onRequestPost, Env } from "./contact";

type FetchMock = jestGlobal.Mock<typeof fetch>;

function makeRequest(body: unknown): Request {
  return new Request("https://neilmillard.com/api/contact", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(body),
  });
}

function makeEnv(): Env {
  return {
    BREVO_API_KEY: "test-brevo-api-key",
    CONTACT_TO_EMAIL: "neil@neilmillard.com",
    CONTACT_FROM_EMAIL: "team@deltafamiglia.com",
  };
}

const originalFetch = global.fetch;

beforeEach(() => {
  global.fetch = jestGlobal.fn() as unknown as typeof fetch;
});

afterEach(() => {
  global.fetch = originalFetch;
});

describe("onRequestPost /api/contact", () => {
  test("sends an email via the Brevo transactional API and returns a success message", async () => {
    const fetchMock = global.fetch as FetchMock;
    fetchMock.mockResolvedValue(new Response(JSON.stringify({ messageId: "abc" }), { status: 201 }));
    const env = makeEnv();

    const response = await onRequestPost({
      request: makeRequest({ name: "Ada Lovelace", email: "ada@example.com", message: "Hello there" }),
      env,
    });

    expect(response.status).toBe(200);
    const data = await response.json();
    expect(data.message).toMatch(/thanks/i);

    expect(fetchMock).toHaveBeenCalledTimes(1);
    const [url, init] = fetchMock.mock.calls[0];
    expect(url).toBe("https://api.brevo.com/v3/smtp/email");
    expect(init?.method).toBe("POST");
    expect((init?.headers as Record<string, string>)["api-key"]).toBe(env.BREVO_API_KEY);
    const sentBody = JSON.parse(init?.body as string);
    expect(sentBody.to).toEqual([{ email: "neil@neilmillard.com" }]);
    expect(sentBody.sender.email).toBe("team@deltafamiglia.com");
    expect(sentBody.replyTo).toEqual({ email: "ada@example.com" });
    expect(sentBody.textContent).toContain("Ada Lovelace");
    expect(sentBody.textContent).toContain("Hello there");
  });

  test("rejects a submission missing the required name field", async () => {
    const env = makeEnv();

    const response = await onRequestPost({
      request: makeRequest({ email: "ada@example.com", message: "Hello there" }),
      env,
    });

    expect(response.status).toBe(400);
    expect(global.fetch).not.toHaveBeenCalled();
  });

  test("rejects a submission missing the required email field", async () => {
    const env = makeEnv();

    const response = await onRequestPost({
      request: makeRequest({ name: "Ada Lovelace", message: "Hello there" }),
      env,
    });

    expect(response.status).toBe(400);
    expect(global.fetch).not.toHaveBeenCalled();
  });

  test("silently accepts but does not send email when the honeypot field is filled", async () => {
    const env = makeEnv();

    const response = await onRequestPost({
      request: makeRequest({ name: "Bot", email: "bot@example.com", message: "spam", _gotcha: "filled" }),
      env,
    });

    expect(response.status).toBe(200);
    expect(global.fetch).not.toHaveBeenCalled();
  });

  test("returns 400 for an unparsable request body", async () => {
    const env = makeEnv();

    const request = new Request("https://neilmillard.com/api/contact", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: "not json",
    });

    const response = await onRequestPost({ request, env });

    expect(response.status).toBe(400);
    expect(global.fetch).not.toHaveBeenCalled();
  });

  test("returns 502 when the Brevo API call fails", async () => {
    const fetchMock = global.fetch as FetchMock;
    fetchMock.mockResolvedValue(new Response("error", { status: 400 }));
    const env = makeEnv();

    const response = await onRequestPost({
      request: makeRequest({ name: "Ada Lovelace", email: "ada@example.com", message: "Hello there" }),
      env,
    });

    expect(response.status).toBe(502);
  });

  test("returns 502 when the fetch call throws", async () => {
    const fetchMock = global.fetch as FetchMock;
    fetchMock.mockRejectedValue(new Error("network error"));
    const env = makeEnv();

    const response = await onRequestPost({
      request: makeRequest({ name: "Ada Lovelace", email: "ada@example.com", message: "Hello there" }),
      env,
    });

    expect(response.status).toBe(502);
  });
});
