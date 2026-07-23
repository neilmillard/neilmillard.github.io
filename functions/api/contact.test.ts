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
    CF_ACCOUNT_ID: "test-account-id",
    CF_EMAIL_API_TOKEN: "test-api-token",
    CONTACT_TO_EMAIL: "neil@neilmillard.com",
    CONTACT_FROM_EMAIL: "team@neilmillard.com",
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
  test("sends an email via the Email Sending REST API and returns a success message", async () => {
    const fetchMock = global.fetch as FetchMock;
    fetchMock.mockResolvedValue(new Response(JSON.stringify({ result: {} }), { status: 200 }));
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
    expect(url).toBe(
      `https://api.cloudflare.com/client/v4/accounts/${env.CF_ACCOUNT_ID}/email/sending/send`,
    );
    expect(init?.method).toBe("POST");
    expect((init?.headers as Record<string, string>).Authorization).toBe(
      `Bearer ${env.CF_EMAIL_API_TOKEN}`,
    );
    const sentBody = JSON.parse(init?.body as string);
    expect(sentBody.to).toBe("neil@neilmillard.com");
    expect(sentBody.from.address).toBe("team@neilmillard.com");
    expect(sentBody.reply_to).toBe("ada@example.com");
    expect(sentBody.text).toContain("Ada Lovelace");
    expect(sentBody.text).toContain("Hello there");
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

  test("returns 502 when the Email Sending API call fails", async () => {
    const fetchMock = global.fetch as FetchMock;
    fetchMock.mockResolvedValue(new Response("error", { status: 500 }));
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
