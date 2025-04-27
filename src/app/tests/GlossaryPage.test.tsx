import "@testing-library/jest-dom";
import { describe, test } from "@jest/globals";
import { cleanup, render, screen } from "@testing-library/react";
import GlossaryPage from "@/app/glossary/page";

// Mock the GlossaryComponent to avoid testing its internals
jest.mock("@/app/components/GlossaryComponent", () => {
  return function MockGlossaryComponent() {
    return <div data-testid="glossary-component">Glossary Component Mock</div>;
  };
});

describe("GlossaryPage", () => {
  test("renders without crashing", () => {
    render(<GlossaryPage />);

    // Check if the GlossaryComponent is rendered
    expect(screen.getByTestId("glossary-component")).toBeInTheDocument();

    cleanup();
  });
});
