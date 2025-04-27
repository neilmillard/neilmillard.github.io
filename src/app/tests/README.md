# Testing in this Project

This directory contains tests for the components in the Next.js application. The tests are written using Jest and React Testing Library.

## Test Structure

Tests are organized to match the component structure:
- Each component should have a corresponding test file in this directory
- Test files should be named `ComponentName.test.tsx`

## Running Tests

To run all tests:
```bash
npm test
```

To run a specific test file:
```bash
npm test -- ComponentName.test.tsx
```

## Writing Tests

When writing tests for components, follow these guidelines:

1. Import the necessary testing utilities:
   ```typescript
   import "@testing-library/jest-dom";
   import {describe, test} from "@jest/globals";
   import {cleanup, render, screen} from "@testing-library/react";
   ```

2. Import the component you want to test:
   ```typescript
   import YourComponent from "@/app/components/YourComponent";
   ```

3. Write tests that verify the component renders correctly and functions as expected:
   ```typescript
   describe("YourComponent", () => {
     test("renders without crashing", () => {
       render(<YourComponent />);
       expect(screen.getByText("Expected Text")).toBeInTheDocument();
       cleanup();
     });
   });
   ```

4. Always call `cleanup()` after each test to ensure the DOM is reset.

## Mocks

Some components use external modules that need to be mocked for testing. The `__mocks__` directory contains mocks for these modules:

- `next-image-export-optimizer.tsx`: A mock for the `ExportedImage` component

If you need to add more mocks, add them to the `__mocks__` directory and update the `moduleNameMapper` in `jest.config.ts` if necessary.

## Common Testing Patterns

1. Testing that a component renders without crashing:
   ```typescript
   test("renders without crashing", () => {
     render(<YourComponent />);
     expect(screen.getByText("Expected Text")).toBeInTheDocument();
     cleanup();
   });
   ```

2. Testing that a component renders with props:
   ```typescript
   test("renders with props", () => {
     render(<YourComponent prop="value" />);
     expect(screen.getByText("value")).toBeInTheDocument();
     cleanup();
   });
   ```

3. Testing form elements:
   ```typescript
   test("form has required fields", () => {
     render(<YourComponent />);
     const input = screen.getByLabelText(/Input Label/i);
     expect(input).toHaveAttribute("required");
     cleanup();
   });
   ```
