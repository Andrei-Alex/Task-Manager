import React from "react";
import { ThemeSwitcher } from "@/features";
import { fireEvent, render, waitFor } from "@testing-library/react";
import { screen } from "@testing-library/dom";
import { SwitchButton } from "./SwitchButton";
import { userEvent } from "@storybook/testing-library";
import { Icon } from "@/atoms";
import { act } from "react-test-renderer";

describe("ThemeSwitcher", () => {
  let checkedState = false;
  const mockToggleHandler = jest.fn(() => {
    checkedState = !checkedState;
  });
  const mainIconTestId = "HiMail-icon";
  const secondaryIconTestId = "MdOutlinePassword-icon";
  const renderSwitch = () => {
    render(
      <SwitchButton
        checked={checkedState}
        toggleHandler={mockToggleHandler}
        mainIcon={<Icon iconName={"HiMail"} />}
        secondaryIcon={<Icon iconName={"MdOutlinePassword"} />}
      />
    );
  };

  it("should render switch Button", () => {
    renderSwitch();
    expect(screen.getByTestId("switch-button")).toBeInTheDocument();
    expect(checkedState).toBe(false);
  });
  it("it should change checked state and fire handler", async () => {
    renderSwitch();
    const switchButton: HTMLElement = screen.getByTestId("switch-button");
    expect(mockToggleHandler).toHaveBeenCalledTimes(0);
    expect(checkedState).toBe(false);

    userEvent.click(switchButton);
    expect(mockToggleHandler).toHaveBeenCalledTimes(1);
    expect(checkedState).toBe(true);

    await userEvent.click(switchButton);
    expect(mockToggleHandler).toHaveBeenCalledTimes(2);
    expect(checkedState).toBe(false);

    await userEvent.click(switchButton);
    expect(mockToggleHandler).toHaveBeenCalledTimes(3);
    expect(checkedState).toBe(true);
  });
  it("should render other icon", async () => {
    renderSwitch();
    const switchButton: HTMLElement = screen.getByTestId("switch-button");
    expect(screen.getByTestId(mainIconTestId));
    await act(() => {
      fireEvent.click(switchButton);
      renderSwitch();
    });
    expect(screen.getByTestId(secondaryIconTestId));
  });
});
