import React from "react";
import { render } from "@testing-library/react";
import { screen } from "@testing-library/dom";
import Form from "./Form";
import { inputs, loginSchema } from "./index";

describe("Input", () => {
  it("Should render form", () => {
    render(
      <Form
        inputs={inputs}
        resolverSchema={loginSchema}
        submitHandler={() => console.log("test")}
        title={"Login Form"}
      />
    );
    const passwordEmail = screen.getByText("Email");
    const passwordLabel = screen.getByText("Password");
    expect(passwordEmail).toBeInTheDocument();
    expect(passwordLabel).toBeInTheDocument();
  });
});
