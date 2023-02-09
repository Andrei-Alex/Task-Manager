import type { ComponentStory, ComponentMeta } from '@storybook/react';
import Presentation from './Presentation';

const Story: ComponentMeta<typeof Presentation> = {
  component: Presentation,
  title: 'Atoms/Presentation',
};
export default Story;

const Template: ComponentStory<typeof Presentation> = args => <Presentation {...args} />;

export const Primary = Template.bind({});
Primary.args = {};
