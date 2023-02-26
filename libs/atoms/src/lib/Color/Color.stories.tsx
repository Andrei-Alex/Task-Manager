import type { ComponentStory, ComponentMeta } from '@storybook/react';
import Color from "./Color"
import { primary, secondary } from '.'

const Story: ComponentMeta<typeof Color> = {
  component: Color,
  title: 'Presentation/Color',
  argTypes: {
    color: {
      name: 'Color',
      type: {
        name: 'string',
        required: true,
      },
      description: 'Design Color.',
      control: {
        type: 'String',
      },
    },
  }
};
export default Story;

const Template: ComponentStory<typeof Color> = args => <Color {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  color: primary
};
export const Secondary = Template.bind({});
Secondary.args = {
  color: secondary
};
