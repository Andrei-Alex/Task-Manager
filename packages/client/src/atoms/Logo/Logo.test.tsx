import renderer from "react-test-renderer";
import React from "react";
import { IAppData } from "@/services/appData";
import { Logo as LogoComponent } from "./Logo";
import { Logo } from "../../../../libs/sharedTypes";
import { render } from "@testing-library/react";
import { screen } from "@testing-library/dom";

describe("Logo", () => {
  const logo: Logo = {
    name: "Kanban",
  };
  const appData: IAppData = {
    server: {
      serverVersion: "1.1.1",
      dbName: "dev",
    },
    clientVersion: "1.2.2",
  };

  it("renders correctly", () => {
    const tree = renderer
      .create(<LogoComponent logo={logo} appData={appData} />)
      .toJSON();
    expect(tree).toMatchSnapshot();
  });

  it("should render dev info", async () => {
    render(<LogoComponent logo={logo} appData={appData} />);
    expect(screen.getByText("Dev")).toBeInTheDocument();
  });
  it("should not render dev ", async () => {
    render(<LogoComponent logo={logo} />);
    const dev = screen.queryByText("Dev");
    expect(dev).toBeNull();
  });
});
