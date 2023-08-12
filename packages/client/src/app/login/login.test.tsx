import React from "react";
import { fireEvent, render, screen, waitFor } from "@testing-library/react";
import Login from "./page";
import { RouterContext } from "next/dist/shared/lib/router-context";
import { routerMock } from "@/__MOCK__";
import { Provider } from "react-redux";
import { rest } from "msw";
import { IAuthRequest, ILoginTestResponse } from "@/services/authentication";
import store from "@/providers/redux/store";
import { setupServer } from "msw/node";
import { AUTH_API, BASE } from "@/constants";
jest.mock("next/navigation");

const username = "Mail@Jest.com";
const password = "Password";
const path = "Login";

const url = AUTH_API.toString();
const server = setupServer(
  rest.post<IAuthRequest, ILoginTestResponse>(url, async (req, res, ctx) => {
    const { username, password } = await req.json();

    return res(ctx.json({}));
  })
);

beforeAll(async () => {
  await server.listen();
});
afterAll(() => {
  server.close();
});
afterEach(() => {
  server.resetHandlers();
  jest.clearAllMocks();
});

const setup = () => {
  const renderForm = render(
    <Provider store={store}>
      <RouterContext.Provider value={routerMock({ pathname: path })}>
        <Login />
      </RouterContext.Provider>
    </Provider>
  );

  const usernameInput = screen.getByLabelText("Email") as HTMLInputElement;
  const passwordInput = screen.getByLabelText("Password") as HTMLInputElement;
  const submitButton = screen.getByText("Submit") as HTMLButtonElement;

  return {
    usernameInput,
    passwordInput,
    submitButton,
    ...renderForm,
  };
};

describe("Login Form and functionality", () => {
  it("Should renders LoginPage with form", () => {
    const { usernameInput, passwordInput, submitButton } = setup();

    expect(screen.getByText(path)).toBeInTheDocument();
    expect(usernameInput).toBeInTheDocument();
    expect(passwordInput).toBeInTheDocument();
    expect(submitButton).toBeInTheDocument();
  });

  it("Should login and return Success message", async () => {
    server.use(
      rest.post(`${url}/login`, (req, res, ctx) => {
        return res(ctx.status(200), ctx.json({ access_token: "test" }));
      })
    );

    const { usernameInput, passwordInput, submitButton } = setup();

    fireEvent.change(usernameInput, { target: { value: username } });
    fireEvent.change(passwordInput, { target: { value: password } });

    expect(usernameInput.value).toBe(username);
    expect(passwordInput.value).toBe(password);

    fireEvent.click(submitButton);

    await waitFor(() => {
      expect(screen.getByText("Success")).toBeInTheDocument();
    });
  });
  it("Should fail to login and return error message", async () => {
    server.use(
      rest.post(`${url}/login`, (req, res, ctx) => {
        return res(ctx.status(404), ctx.json({}));
      })
    );

    const { usernameInput, passwordInput, submitButton } = setup();

    fireEvent.change(usernameInput, { target: { value: username } });
    fireEvent.change(passwordInput, { target: { value: password } });

    expect(usernameInput.value).toBe(username);
    expect(passwordInput.value).toBe(password);

    fireEvent.click(submitButton);

    await waitFor(() => {
      expect(
        screen.getByText("Request failed with status code 404")
      ).toBeInTheDocument();
    });
  });
  //TODO: Add more tests
});
