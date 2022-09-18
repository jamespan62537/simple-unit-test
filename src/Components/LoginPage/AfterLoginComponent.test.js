import { render, screen, fireEvent } from "@testing-library/react";
// Component
import AfterLoginComponent from "./AfterLoginComponent";

describe("Render correct component", () => {
  test("render greeting", () => {
    const userName = "James";
    render(<AfterLoginComponent userName={userName} />);
    const appComponent = screen.getByTestId("greeting-text");
    expect(appComponent.textContent).toBe("Welcome James");
  });
});

describe("Render component to test function", () => {
  test("logout click event", () => {
    const mockLogout = jest.fn();
    render(<AfterLoginComponent handleLogout={mockLogout} />);
    const appComponent = screen.getByTestId("logout-button");
    fireEvent.click(appComponent);
    expect(mockLogout).toBeCalledTimes(1);
  });
});
