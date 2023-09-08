import React from "react";
import { render } from "@testing-library/react";
import renderer from "react-test-renderer";
import { ConfigWrapper } from "./ConfigWrapper";
import store from "../../providers/redux/store";
import { Provider } from "react-redux";
import { mockMatchMedia } from "@/__MOCK__";

describe("Input", () => {
  mockMatchMedia();
  it("renders correctly", () => {
    const tree = renderer
      .create(
        <Provider store={store}>
          <ConfigWrapper />
        </Provider>
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
  it("should have html with class darkMode", () => {
    const { container } = render(
      <Provider store={store}>
        <ConfigWrapper />
      </Provider>
    );
    expect(container.firstChild).toHaveClass("lightMode");
  });
});
