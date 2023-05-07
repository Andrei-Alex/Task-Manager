import React from "react";
import { fireEvent, getByText, render } from "@testing-library/react";
import { screen } from "@testing-library/dom";
import Button from "./Button";
import { userEvent } from "@storybook/testing-library";

const handleClick = jest.fn();
describe("Button", () => {
  it("should display Click here", () => {
    render(<Button text={"Click here"} buttonType={"button"} />);
    const button = screen.getByText("Click here");
    expect(button).toBeInTheDocument();
  });
  it("should have container class", () => {
    render(<Button text={"Click here"} buttonType={"button"} />);
    const button = screen.getByText("Click here");
    expect(button).toHaveClass(`button`);
  });
  it("should display Click here", () => {
    render(<Button text={"Click here"} buttonType={"button"} />);
    const button = screen.getByText("Click here");
    expect(button).toBeInTheDocument();
  });
  it("should call onClick function", async () => {
    render(
      <Button
        text={"Click here"}
        callback={handleClick}
        buttonType={"button"}
      />
    );
    const button = screen.getByText("Click here");
    fireEvent.click(button);
    expect(handleClick).toBeCalledTimes(1);
  });
});
