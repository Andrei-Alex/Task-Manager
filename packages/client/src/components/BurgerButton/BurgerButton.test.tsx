import React from "react";
import { fireEvent, render } from "@testing-library/react";
import { screen } from "@testing-library/dom";
import renderer from "react-test-renderer";
import BurgerButton from "./BurgerButton";

describe("Input", () => {
  const onClickHandler = jest.fn();
  it("renders correctly", () => {
    const tree = renderer.create(<BurgerButton />).toJSON();
    expect(tree).toMatchSnapshot();
  });
  it("should render burger icon", () => {
    render(<BurgerButton />);
    const burgerButton: HTMLElement = screen.getByTestId(
      "RxHamburgerMenu-icon"
    );
    expect(burgerButton).toBeInTheDocument();
  });
  it("should render arrow icon", () => {
    render(<BurgerButton isOpen={true} />);
    const burgerButton: HTMLElement = screen.getByTestId("IoIosArrowDown-icon");
    expect(burgerButton).toBeInTheDocument();
  });
  it("should call click handler on click", () => {
    render(<BurgerButton onClickHandler={onClickHandler} />);
    const burgerButton: HTMLElement = screen.getByTestId(
      "RxHamburgerMenu-icon"
    );
    fireEvent.click(burgerButton);
    expect(onClickHandler).toHaveBeenCalled();
  });
});
