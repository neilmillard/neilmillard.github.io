import {describe} from "@jest/globals";
import {render, screen} from "@testing-library/react";
import '@testing-library/jest-dom';
import Deploys from "@/app/deploys/page";

// Mock the DeploysComponent to isolate the test
jest.mock("@/app/components/DeploysComponent", () => {
  return function MockDeploysComponent() {
    return <div data-testid="deploys-component">Mocked DeploysComponent</div>;
  };
});

describe('Deploys Page', () => {
  test('renders the DeploysComponent', () => {
    render(<Deploys />);

    const deploysComponent = screen.getByTestId('deploys-component');
    expect(deploysComponent).toBeInTheDocument();
    expect(deploysComponent).toHaveTextContent('Mocked DeploysComponent');
  });
});
