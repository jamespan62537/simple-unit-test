import { screen, fireEvent } from "@testing-library/react";
// Component
import LoginPage from "./index";
// Utils
import { renderWithProviders } from "../../Utils/test-utils";
//
import userSlice from "../../Store/Slice/userSlice";

const setup = (initialState) => {
  return renderWithProviders(<LoginPage />, {
    preloadedState: {
      userReducer: initialState,
    },
  });
};

describe("Render correct component before login", () => {
  test("render unLogin component", () => {
    const initialState = { isLogin: false };
    setup(initialState);
    const appComponent = screen.getByTestId("unLogin");
    expect(appComponent).toBeInTheDocument();
  });

  test("hide login component", () => {
    const initialState = { isLogin: false };
    setup(initialState);
    const appComponent = screen.queryByTestId("login");
    expect(appComponent).not.toBeInTheDocument();
  });
});

describe("Render correct component after login", () => {
  test("hide unLogin component", async () => {
    const initialState = { isLogin: true };
    setup(initialState);
    const appComponent = screen.queryByTestId("unLogin");
    expect(appComponent).not.toBeInTheDocument();
  });

  test("render login component", () => {
    const initialState = { isLogin: true };
    setup(initialState);
    const appComponent = screen.getByTestId("login");
    expect(appComponent).toBeInTheDocument();
  });
});

describe("Render component to test function", () => {
  const mockSetState = jest.fn();
  jest.mock("react", () => ({
    useState: (initial) => [initial, mockSetState],
  }));

  test("change userName event", () => {
    const initialState = { isLogin: false };
    setup(initialState);
    const appComponent = screen.getByTestId("input-username");
    fireEvent.change(appComponent, { target: { value: "James" } });
    expect(appComponent.value).toBe("James");
  });

  test("logout event", () => {
    const initialState = { isLogin: true };
    setup(initialState);
    const logoutButton = screen.getByTestId("logout-button");
    fireEvent.click(logoutButton);
    const unLoginComponent = screen.queryByTestId("unLogin");
    expect(unLoginComponent).toBeInTheDocument();
  });
});
