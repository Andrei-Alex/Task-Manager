import type { ComponentStory, ComponentMeta } from '@storybook/react';
import Presentation from "./Presentation";
import { defaultPresentation} from ".";

const Story: ComponentMeta<typeof Presentation> = {
  component: Presentation,
  title: 'Presentation/Lib Presentation',
  argTypes: {
    presentation: {
      name: 'Presentation',
      type: {
        name: 'string',
        required: true,
      },
      description: 'Text content of the component.',
      control: {
        type: 'object',
      },
    },
  }
};
export default Story;

const Template: ComponentStory<typeof Presentation> = args => <Presentation {...args} />;

export const Default = Template.bind({});
Default.args = {
  presentation: defaultPresentation
};
