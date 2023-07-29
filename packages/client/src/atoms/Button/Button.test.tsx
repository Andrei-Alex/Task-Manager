import React from "react";
import { fireEvent, render } from "@testing-library/react";
import { screen } from "@testing-library/dom";
import Button from "./Button";
import renderer from "react-test-renderer";

const handleClick = jest.fn();
describe("Button", () => {
  it("renders correctly", () => {
    const tree = renderer
      .create(<Button text={"Click here"} type={"button"} />)
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
  it("should display Click here", () => {
    render(<Button text={"Click here"} type={"button"} />);
    const button = screen.getByText("Click here");
    expect(button).toBeInTheDocument();
  });
  it("should have mantine class", () => {
    render(<Button text={"Click here"} type={"button"} />);
    const button = screen.getByText("Click here");
    expect(button).toHaveClass(`mantine-1ryt1ht mantine-Button-label
`);
  });
  it("should display Click here", () => {
    render(<Button text={"Click here"} type={"button"} />);
    const button = screen.getByText("Click here");
    expect(button).toBeInTheDocument();
  });
  it("should call onClick function", async () => {
    render(
      <Button text={"Click here"} onClick={handleClick} type={"button"} />
    );
    const button = screen.getByText("Click here");
    fireEvent.click(button);
    expect(handleClick).toBeCalledTimes(1);
  });
  it("should NOT call onClick function if disabled", async () => {
    render(
        <Button text={"Click here"} onClick={handleClick} type={"button"} disabled={true} />
    );
    const button = screen.getByRole('button')
    fireEvent.click(button);
    expect(handleClick).toBeCalledTimes(1);
  });
  it("should NOT call onClick function if loading", async () => {
    render(
        <Button text={"Click here"} onClick={handleClick} type={"button"} loading={true} />
    );
    const button = screen.getByRole('button')
    fireEvent.click(button);
    expect(handleClick).toBeCalledTimes(1);
  });
});
