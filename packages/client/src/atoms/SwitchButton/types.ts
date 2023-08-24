import React from "react";

export interface ISwitchButton {
  checked: boolean;
  toggleHandler: () => void;
  mainIcon: React.ReactNode;
  secondaryIcon: React.ReactNode;
  testId: "string";
}
