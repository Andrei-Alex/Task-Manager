import type { ComponentStory, ComponentMeta } from '@storybook/react';
import Atoms from './atoms';

const Story: ComponentMeta<typeof Atoms> = {
  component: Atoms,
  title: 'Atoms',
};
export default Story;

const Template: ComponentStory<typeof Atoms> = args => <Atoms {...args} />;

export const Primary = Template.bind({});
Primary.args = {};
