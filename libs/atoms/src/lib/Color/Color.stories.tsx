import type { ComponentStory, ComponentMeta } from '@storybook/react';
import Color from "./Color"
import { primary } from '.'

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

export const Default = Template.bind({});
Default.args = {
  color: primary
};
