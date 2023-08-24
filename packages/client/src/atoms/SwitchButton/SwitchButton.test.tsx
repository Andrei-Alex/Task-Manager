import React from "react";
import { ThemeSwitcher } from "@/features";
import { fireEvent, render, waitFor } from "@testing-library/react";
import { screen } from "@testing-library/dom";
import { SwitchButton } from "./SwitchButton";

describe("ThemeSwitcher", () => {
  let checked = true;
  const toggleHandler = jest.fn();
  render(
    <SwitchButton
      checked={checked}
      toggleHandler={toggleHandler}
      mainIcon={<></>}
      secondaryIcon={<></>}
    />
  );
  const switcher: HTMLElement = screen.getByTestId("switch-button");
  it("should render switch Button", () => {
    expect(switcher).toBeInTheDocument();
    expect(checked).toBe(true);
  });
});
