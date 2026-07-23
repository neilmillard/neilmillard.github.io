import "@testing-library/jest-dom";
import { describe, test } from "@jest/globals";
import { cleanup, render, screen } from "@testing-library/react";
import ContactPage from "@/app/contact/page";

// Mock the ContactForm component to avoid testing its internals again
jest.mock("@/app/components/ContactForm", () => {
  return function MockContactForm({ apiUrl }: { apiUrl: string }) {
    return <div data-testid="contact-form" data-api-url={apiUrl}>Contact Form Mock</div>;
  };
});

describe("ContactPage", () => {
  test("renders without crashing", () => {
    render(<ContactPage />);

    // Check if the ContactForm is rendered
    const contactForm = screen.getByTestId("contact-form");
    expect(contactForm).toBeInTheDocument();

    // Check if the Cloudflare Function endpoint is passed to the ContactForm
    expect(contactForm).toHaveAttribute("data-api-url", "/api/contact");

    cleanup();
  });
});
