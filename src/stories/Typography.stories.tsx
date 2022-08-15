import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Typography } from './Typography';

export default {
  title: 'Task/Typography',
  component: Typography,
  parameters: {
    layout: 'fullscreen',
  },
} as ComponentMeta<typeof Typography>;

const Template: ComponentStory<typeof Typography> = (args) => <Typography {...args} />;

export const H1 = Template.bind({});
H1.args = {
  label: 'This is a H1 tag element',
  size: 'large',
  font: 'bold',
};

export const H2 = Template.bind({});
H2.args = {
  label: 'This is a H2 tag element',
  size: 'medium',
  font: 'medium',
};

export const p = Template.bind({});
p.args = {
  label: 'This is a p tag element',
  size: 'small',
  font: 'normal',
};
