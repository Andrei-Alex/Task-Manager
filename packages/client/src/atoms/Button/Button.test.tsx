import React from "react";
import { fireEvent, render } from "@testing-library/react";
import { screen } from "@testing-library/dom";
import Button from "./Button";
import renderer from "react-test-renderer";

const handleClick = jest.fn();
describe("Button", () => {
  it("renders correctly", () => {
    const tree = renderer
      .create(<Button text={"Click here"} buttonType={"button"} />)
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
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
      <Button text={"Click here"} onClick={handleClick} buttonType={"button"} />
    );
    const button = screen.getByText("Click here");
    fireEvent.click(button);
    expect(handleClick).toBeCalledTimes(1);
  });
});
