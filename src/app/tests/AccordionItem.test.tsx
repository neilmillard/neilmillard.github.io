import {describe} from "@jest/globals";
import {fireEvent, render, screen} from "@testing-library/react";
import '@testing-library/jest-dom';
import AccordionItem from "@/app/components/AccordionItem";

describe('AccordionItem', () => {
  const mockProps = {
    question: "Test Question",
    answer: "Test Answer"
  };

  test('renders with question and hidden answer', () => {
    render(<AccordionItem {...mockProps} />);

    // Question should be visible
    expect(screen.getByText(mockProps.question)).toBeInTheDocument();

    // Answer should be in the document but hidden
    const answer = screen.getByText(mockProps.answer);
    expect(answer).toBeInTheDocument();

    // Check if the answer container has the max-h-0 class (hidden)
    const answerContainer = answer.parentElement;
    expect(answerContainer).toHaveClass('max-h-0');
    expect(answerContainer).not.toHaveClass('max-h-96');
  });

  test('shows answer when question is clicked', () => {
    render(<AccordionItem {...mockProps} />);

    // Click the question button
    fireEvent.click(screen.getByText(mockProps.question));

    // Answer container should now have max-h-96 class (visible)
    const answer = screen.getByText(mockProps.answer);
    const answerContainer = answer.parentElement;
    expect(answerContainer).toHaveClass('max-h-96');
    expect(answerContainer).not.toHaveClass('max-h-0');
  });

  test('hides answer when question is clicked again', () => {
    render(<AccordionItem {...mockProps} />);

    // Click to open
    fireEvent.click(screen.getByText(mockProps.question));

    // Click again to close
    fireEvent.click(screen.getByText(mockProps.question));

    // Answer container should now have max-h-0 class again (hidden)
    const answer = screen.getByText(mockProps.answer);
    const answerContainer = answer.parentElement;
    expect(answerContainer).toHaveClass('max-h-0');
    expect(answerContainer).not.toHaveClass('max-h-96');
  });

  test('rotates the arrow icon when opened', () => {
    render(<AccordionItem {...mockProps} />);

    // Get the button first, then find the SVG within it
    const button = screen.getByText(mockProps.question).closest('button');
    const icon = button?.querySelector('svg');

    // Initially, the icon should not have the rotate-180 class
    expect(icon).not.toHaveClass('rotate-180');

    // Click to open
    fireEvent.click(screen.getByText(mockProps.question));

    // Now the icon should have the rotate-180 class
    expect(icon).toHaveClass('rotate-180');
  });
});
