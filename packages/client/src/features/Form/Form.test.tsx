import React from "react";
import { render } from "@testing-library/react";
import { screen } from "@testing-library/dom";
import Form from "./Form";
import { loginInputs, loginSchema } from "./index";

describe("Input", () => {
  it("Should render form", () => {
    render(
      <Form
        inputs={loginInputs}
        resolverSchema={loginSchema}
        submitHandler={() => console.log("Jest")}
        title={"Login Form"}
      />
    );
    const passwordEmail = screen.getByText("Email");
    const passwordLabel = screen.getByText("Password");
    expect(passwordEmail).toBeInTheDocument();
    expect(passwordLabel).toBeInTheDocument();
  });
});
