import "@testing-library/jest-dom";
import {describe, test} from "@jest/globals";
import {cleanup, render, screen} from "@testing-library/react";
import ContactForm from "@/app/components/ContactForm";

describe("ContactForm Component", () => {
  const mockApiUrl = "https://mock-api.example.com/api/contact";

  test("renders without crashing", () => {
    render(<ContactForm apiUrl={mockApiUrl} />);

    // Check if the form elements are rendered
    expect(screen.getByLabelText(/Your Name/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/Your Email/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/Your Message/i)).toBeInTheDocument();
    expect(screen.getByRole("button", { name: /Send/i })).toBeInTheDocument();

    cleanup();
  });

  test("form has required fields", () => {
    render(<ContactForm apiUrl={mockApiUrl} />);

    // Check if name and email fields are required
    const nameInput = screen.getByLabelText(/Your Name/i);
    const emailInput = screen.getByLabelText(/Your Email/i);

    expect(nameInput).toHaveAttribute("required");
    expect(emailInput).toHaveAttribute("required");

    cleanup();
  });

  test("form has correct action URL", () => {
    render(<ContactForm apiUrl={mockApiUrl} />);

    // Check if the form posts to the Cloudflare Function endpoint
    const form = document.querySelector("form");
    expect(form).toHaveAttribute("action", mockApiUrl);

    cleanup();
  });
});
