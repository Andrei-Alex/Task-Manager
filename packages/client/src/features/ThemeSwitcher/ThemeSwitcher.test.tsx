import renderer from "react-test-renderer";
import React from "react";
import { ThemeSwitcher } from "@/features";
import store from "../../providers/redux/store";
import { Provider } from "react-redux";

describe("ThemeSwitcher", () => {
  it("renders correctly", () => {
    const tree = renderer
      .create(
        <Provider store={store}>
          <ThemeSwitcher />
        </Provider>
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
