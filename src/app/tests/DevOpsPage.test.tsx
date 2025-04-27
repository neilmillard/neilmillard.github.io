import "@testing-library/jest-dom";
import { describe, test } from "@jest/globals";
import { cleanup, render, screen } from "@testing-library/react";
import DevOpsPage from "@/app/devops/page";

// Mock the DevOpsComponent to avoid testing its internals
jest.mock("@/app/components/DevOpsComponent", () => {
  return function MockDevOpsComponent() {
    return <div data-testid="devops-component">DevOps Component Mock</div>;
  };
});

describe("DevOpsPage", () => {
  test("renders without crashing", () => {
    render(<DevOpsPage />);

    // Check if the DevOpsComponent is rendered
    expect(screen.getByTestId("devops-component")).toBeInTheDocument();

    cleanup();
  });
});
