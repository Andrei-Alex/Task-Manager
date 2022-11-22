import type { ComponentStory, ComponentMeta } from '@storybook/react';
import DisplayHealth from './DisplayHealth';

const Story: ComponentMeta<typeof DisplayHealth> = {
  component: DisplayHealth,
  title: 'DisplayHealth',
  argTypes: {
    status: {
      name: 'status',
      type: {
        name: 'string',
        required: false,
      },
      defaultValue: 'ok',
      description: 'Display text',
      control: {
        type: 'text',
      },
    },
  },
};
export default Story;

const Template: ComponentStory<typeof DisplayHealth> = args => (
  <DisplayHealth {...args} />
);

export const Health = Template.bind({});
Health.args = {
  status: 'ok',
};
