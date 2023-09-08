import React from "react";
import { Switch, Group } from "@mantine/core";
import { ISwitchButton } from "./index";

export const SwitchButton: React.FC<ISwitchButton> = ({
  checked = false,
  toggleHandler,
  mainIcon,
  secondaryIcon,
  testId = "switch-button",
}) => {
  return (
    <Group>
      <Switch
        data-testid={testId}
        checked={checked}
        onChange={() => toggleHandler()}
        size="lg"
        onLabel={mainIcon}
        offLabel={secondaryIcon}
      />
    </Group>
  );
};

export default SwitchButton;
