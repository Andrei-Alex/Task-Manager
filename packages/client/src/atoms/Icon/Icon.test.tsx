import React from "react";
import { render } from "@testing-library/react";
import renderer from "react-test-renderer";
import { screen } from "@testing-library/dom";
import Icon from "./Icon";

describe("Icon", () => {
  it("renders correctly", () => {
    const tree = renderer.create(<Icon iconName={"HiMail"} />).toJSON();
    expect(tree).toMatchSnapshot();
  });
  it("should display correct icon", () => {
    render(<Icon iconName={"HiMail"} />);
    expect(screen.getByTestId("HiMail-icon")).toBeInTheDocument();
    expect(
      screen.queryByTestId("MdOutlinePassword-icon")
    ).not.toBeInTheDocument();
  });
  it("should display correct icon", () => {
    render(<Icon iconName={"MdOutlinePassword"} />);
    expect(screen.getByTestId("MdOutlinePassword-icon")).toBeInTheDocument();
    expect(screen.queryByTestId("HiMail-icon")).not.toBeInTheDocument();
  });
  it("should display correct icon", () => {
    render(<Icon iconName={"RxHamburgerMenu"} />);
    expect(screen.getByTestId("RxHamburgerMenu-icon")).toBeInTheDocument();
  });
  it("should display correct icon", () => {
    render(<Icon iconName={"IoIosArrowDown"} />);
    expect(screen.getByTestId("IoIosArrowDown-icon")).toBeInTheDocument();
  });
});
