import React from "react";
import { fireEvent, render } from "@testing-library/react";
import { screen } from "@testing-library/dom";
import Form from "./Form";
import { inputs, schema } from ".";

describe("Input", () => {
  it("Should render form", () => {
    render(
      <Form
        inputs={inputs}
        resolverSchema={schema}
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
