import React from "react";
import { Switch, Group } from "@mantine/core";
import { ISwitchButton } from "./index";

export const SwitchButton: React.FC<ISwitchButton> = ({
  checked,
  toggleHandler,
  mainIcon,
  secondaryIcon,
}) => {
  return (
    <Group>
      <Switch
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
