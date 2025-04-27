import "@testing-library/jest-dom";
import { describe, test } from "@jest/globals";
import { cleanup, render, screen } from "@testing-library/react";
import BookPage from "@/app/book/page";

// Mock the BookComponent to avoid testing its internals
jest.mock("@/app/components/BookComponent", () => {
  return function MockBookComponent() {
    return <div data-testid="book-component">Book Component Mock</div>;
  };
});

describe("BookPage", () => {
  test("renders without crashing", () => {
    render(<BookPage />);

    // Check if the BookComponent is rendered
    expect(screen.getByTestId("book-component")).toBeInTheDocument();

    cleanup();
  });
});
