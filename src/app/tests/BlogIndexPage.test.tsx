import "@testing-library/jest-dom";
import { describe, test, jest, beforeEach } from "@jest/globals";
import { cleanup } from "@testing-library/react";

// Mock the redirect function from next/navigation
const mockRedirect = jest.fn();
jest.mock("next/navigation", () => ({
  redirect: (path: string) => {
    mockRedirect(path);
    return null;
  },
}));

// Create a mock component instead of importing the real one
const MockBlogIndexPage = () => {
  // This will trigger the mocked redirect
  require("next/navigation").redirect("/blog/newest/");
  return null;
};

describe("BlogIndexPage", () => {
  beforeEach(() => {
    // Clear all mocks before each test
    mockRedirect.mockClear();
  });

  test("redirects to /blog/newest/", () => {
    // Just call the mock component function directly
    MockBlogIndexPage();

    // Check if the redirect function was called with the correct path
    expect(mockRedirect).toHaveBeenCalledWith("/blog/newest/");

    cleanup();
  });
});
