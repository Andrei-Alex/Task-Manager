import React from "react";
import { render } from "@testing-library/react";
import { screen } from "@testing-library/dom";
import ConfirmMessage from "./ConfirmMessage";
import renderer from "react-test-renderer";

describe("ConfirmMessage", () => {
  it("renders correctly", () => {
    const tree = renderer
      .create(<ConfirmMessage success={"Success !!!"} />)
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
  it("should display Success !!! and have CSS class success", () => {
    render(<ConfirmMessage success={"Success !!!"} />);
    const message = screen.getByText("Success !!!");

    expect(message).toBeInTheDocument();
    expect(message).toHaveClass("success");
  });
  it("should display Bad Credentials and have CSS class error", () => {
    render(<ConfirmMessage error={"Bad Credentials !!!"} />);
    const message = screen.getByText("Bad Credentials !!!");

    expect(message).toBeInTheDocument();
    expect(message).toHaveClass("error");
  });
});
