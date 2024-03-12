import React from "react";
import { render } from "@testing-library/react";
import { screen } from "@testing-library/dom";

import Form from "./Form";
import { loginInputs, loginSchema } from ".";

describe("Input", () => {
  let container: HTMLElement;
  beforeEach(() => {
   const form =  render(
        <Form
            inputs={loginInputs}
            resolverSchema={loginSchema}
            submitHandler={() => console.warn("Jest")}
            title="Login Form"
        />
    );
   container = form.container;
  });

  it("Should render form", () => {
    const emailInput = screen.getByText("Email");
    const passwordInput = screen.getByText("Password");
    expect(emailInput).toBeInTheDocument();
    expect(passwordInput).toBeInTheDocument();
  });
  it('has 2 inputs', () => {

    const inputs = container.querySelectorAll('input');
    expect(inputs.length).toBe(2);
  })
  it('has a password input type', () => {
    const passwordInput = screen.getByLabelText("Password") as HTMLInputElement;
    expect(passwordInput.type).toBe('password')
  })
  it('has a title', () => {
    const header = screen.queryByRole("heading", {name: 'Login Form'}) as HTMLInputElement;
    expect(header).toBeInTheDocument();
  })
  it('has a submit button', () => {
    const button = screen.queryByRole("button", {name: 'Submit'}) as HTMLInputElement;
    expect(button).toBeInTheDocument();
  })
});
