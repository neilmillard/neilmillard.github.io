import "@testing-library/jest-dom";
import { describe, test } from "@jest/globals";
import { cleanup, render, screen } from "@testing-library/react";
import HomePage from "@/app/page";

describe("HomePage", () => {
  test("renders without crashing", () => {
    render(<HomePage />);

    // Check if the main heading is rendered
    expect(screen.getByText("I am Neil. How can I help you today?")).toBeInTheDocument();

    // Check if the services section is rendered
    expect(screen.getByText("Services")).toBeInTheDocument();

    // Check if some of the services are rendered
    expect(screen.getByText("Train your team")).toBeInTheDocument();

    cleanup();
  });

  test("displays Neil's background information", () => {
    render(<HomePage />);

    // Check if the background information is rendered
    expect(screen.getByText(/With over 20 years IT experience/)).toBeInTheDocument();
    expect(screen.getByText(/Neil Millard is a DevOps and platform engineer and founder of devops-answers.com/)).toBeInTheDocument();
    expect(screen.queryByText(/successful entrepreneur/)).not.toBeInTheDocument();
    expect(screen.getByText(/spoke at PlatformCon 2026 in London/)).toBeInTheDocument();

    // Helpful Money links point at the budgeting challenge, not the old mortgage posts
    const challengeLink = screen.getByRole("link", {name: /Give Every Pound a Job/i});
    expect(challengeLink).toHaveAttribute("href", "https://www.helpfulmoney.site/challenge/give-every-pound-a-job/");
    expect(screen.queryByRole("link", {name: /mortgage overpayments/i})).not.toBeInTheDocument();

    cleanup();
  });

  test("talks link to the AI training workshop, not the Blakehay talk", () => {
    render(<HomePage />);

    const aiLink = screen.getByRole("link", {name: /AI Training Workshop/i});
    expect(aiLink).toHaveAttribute("href", "https://www.deltafamiglia.com/ai-training/");
    expect(screen.queryByText("The Psychology of the Side Hustle")).not.toBeInTheDocument();

    cleanup();
  });
});
