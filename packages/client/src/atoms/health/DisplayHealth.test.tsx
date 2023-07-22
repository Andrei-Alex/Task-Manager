import React from "react";
import { render } from "@testing-library/react";
import { screen } from "@testing-library/dom";
import DisplayHealth from "./DisplayHealth";

describe("DisplayHealth", () => {
    it("should display No status", () => {
        render(<DisplayHealth status={null}/>);
        const status = screen.getByText("No status");
        expect(status).toBeInTheDocument();
    });
    it("should display the status", () => {
        render(<DisplayHealth status={'LGTM'}/>);
        const status = screen.getByText("LGTM");
        expect(status).toBeInTheDocument();
    });
});