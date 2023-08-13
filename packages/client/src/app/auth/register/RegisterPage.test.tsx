import { render, screen } from "@testing-library/react";
import Register from "./page";
import { RouterContext } from "next/dist/shared/lib/router-context";
import { routerMock } from "../../../__MOCK__";
jest.mock("next/navigation");

const path = "Register";
it("renders RegisterPage", () => {
  render(
    <RouterContext.Provider value={routerMock({ pathname: path })}>
      <Register />
    </RouterContext.Provider>
  );

  expect(screen.getByText(path));
});
