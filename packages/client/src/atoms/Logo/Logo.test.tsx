import renderer from "react-test-renderer";
import React from "react";
import { IAppData } from "@/services/appData";
import { Logo as LogoComponent } from "./Logo";
import { Logo } from "../../../../libs/sharedTypes";

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
});
