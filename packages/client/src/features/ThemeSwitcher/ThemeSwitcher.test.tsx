import React from "react";
import { ThemeSwitcher } from "@/features";
import store, { RootState } from "../../providers/redux/store";
import { Provider } from "react-redux";
import { fireEvent, render, waitFor } from "@testing-library/react";
import { screen } from "@testing-library/dom";

describe("ThemeSwitcher", () => {
  it("should render burger icon", () => {
    render(
      <Provider store={store}>
        <ThemeSwitcher />
      </Provider>
    );
    const themeSwitcher: HTMLElement = screen.getByTestId("switch-button");
    expect(themeSwitcher).toBeInTheDocument();
  });
  it("should switch redux theme value and change the switch button icon", async () => {
    render(
      <Provider store={store}>
        <ThemeSwitcher />
      </Provider>
    );
    const themeSwitcher: HTMLElement = screen.getByTestId("switch-button");
    const initialState: RootState = store.getState();
    expect(initialState.theme.isDarkMode).toBe(false);

    fireEvent.click(themeSwitcher);
    await waitFor(() => {
      const lightModeIcon = screen.queryByTestId("lightModeIcon");
      const darkModeIcon = screen.queryByTestId("darkModeIcon");
      const updatedState = store.getState();
      expect(lightModeIcon).toBeInTheDocument();
      expect(darkModeIcon).toBeNull();
      expect(updatedState.theme.isDarkMode).toBe(true);
    });

    fireEvent.click(themeSwitcher);
    await waitFor(() => {
      const lightModeIcon = screen.queryByTestId("lightModeIcon");
      const darkModeIcon = screen.queryByTestId("darkModeIcon");
      const updatedState = store.getState();
      expect(lightModeIcon).toBeNull();
      expect(darkModeIcon).toBeInTheDocument();
      expect(updatedState.theme.isDarkMode).toBe(false);
    });
  });
});
