import React from "react";
import { fireEvent, render } from "@testing-library/react";
import { screen } from "@testing-library/dom";
import Input from "./Input";
import renderer from "react-test-renderer";
import Icon from "../../atoms/Icon/Icon";
const setup = () => {
  const renderInput = render(
    <Input label={"Label"} id={"label"} placeholder={"My Placeholder"} />
  );
  const input: HTMLInputElement = screen.getByLabelText("Label");
  return {
    input,
    ...renderInput,
  };
};

describe("Input", () => {
  it("renders correctly", () => {
    const tree = renderer
      .create(
        <Input label={"Label"} id={"label"} placeholder={"My Placeholder"} />
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
  it("should have value", () => {
    const { input } = setup();
    fireEvent.change(input, { target: { value: "Jest" } });
    expect(input.value).toBe("Jest");
  });
  it("should display placeholder and label", () => {
    setup();
    const label = screen.getByText("Label");
    const placeholder = screen.getByPlaceholderText("My Placeholder");
    expect(label).toBeInTheDocument();
    expect(placeholder).toBeInTheDocument();
  });
  it("should display *", () => {
    render(<Input label={"Required label"} id={"Required"} required={true} />);
    const requiredSymbol = screen.getByText("*");
    expect(requiredSymbol).toBeInTheDocument();
  });
});
