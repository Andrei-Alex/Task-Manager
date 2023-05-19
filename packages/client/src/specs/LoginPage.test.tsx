import { render, screen } from "@testing-library/react";
import Login from "../pages/login";
import { RouterContext } from "next/dist/shared/lib/router-context";
import { routerMock } from "../__MOCK__";
import { Provider } from "react-redux";

import store from "@/providers/redux/store";
import { createStore } from "@reduxjs/toolkit";

const path = "Login";
it("renders LoginPage", () => {
  render(
    <Provider store={store}>
      <RouterContext.Provider value={routerMock({ pathname: path })}>
        <Login />
      </RouterContext.Provider>
    </Provider>
  );

  expect(screen.getByText(path));
});
