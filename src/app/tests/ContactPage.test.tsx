import "@testing-library/jest-dom";
import { describe, test } from "@jest/globals";
import { cleanup, render, screen } from "@testing-library/react";
import ContactPage from "@/app/contact/page";

// Mock the ContactForm component to avoid testing its internals again
jest.mock("@/app/components/ContactForm", () => {
  return function MockContactForm({ siteEmail }) {
    return <div data-testid="contact-form" data-email={siteEmail}>Contact Form Mock</div>;
  };
});

describe("ContactPage", () => {
  test("renders without crashing", () => {
    render(<ContactPage />);

    // Check if the ContactForm is rendered
    const contactForm = screen.getByTestId("contact-form");
    expect(contactForm).toBeInTheDocument();

    // Check if the correct email is passed to the ContactForm
    expect(contactForm).toHaveAttribute("data-email", "f/mgepvvjk");

    cleanup();
  });
});
