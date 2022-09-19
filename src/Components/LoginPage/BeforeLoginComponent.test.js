import { screen } from "@testing-library/react";
// Component
import BeforeLoginComponent from "./BeforeLoginComponent";
// Utils
import { renderWithProviders } from "../../Utils/test-utils";

const setup = (initialState) => {
  return renderWithProviders(<BeforeLoginComponent />, {
    preloadedState: {
      userReducer: initialState,
    },
  });
};

describe("Render correct component", () => {
  test("render greeting", () => {
    setup();
    const appComponent = screen.getByTestId("input-username");
    expect(appComponent).toBeInTheDocument();
  });
});
