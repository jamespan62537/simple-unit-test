import { render, screen, fireEvent } from "@testing-library/react";
// Component
import BeforeLoginComponent from "./BeforeLoginComponent";
// Utils
import { renderWithProviders } from "../../Utils/test-utils";
//
import userSlice from "../../Store/Slice/userSlice";

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

describe("Render component to test function", () => {
  test("keydown event", () => {
    const { store } = setup();
    const appComponent = screen.getByTestId("input-username");
    appComponent.focus();
    fireEvent.keyPress(appComponent, { key: "Enter", code: 13, charCode: 13 });
    expect(store.getState().userReducer).toEqual({
      isLogin: true,
      userName: "James",
    });
  });
});
