import React from "react";
import { fireEvent, render } from "@testing-library/react";
import { screen } from "@testing-library/dom";
import Input from "./Input";
const setup = () => {
  const utils = render(
    <Input label={"Label"} id={"label"} placeholder={"My Placeholder"} />
  );
  const input: HTMLInputElement = screen.getByLabelText("Label");
  return {
    input,
    ...utils,
  };
};

describe("Input", () => {
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
    const label = screen.getByText("*");
    expect(label).toBeInTheDocument();
  });
});
