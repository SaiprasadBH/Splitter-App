import React from 'react';
import { Story, Meta } from '@storybook/react';
import Button from './Button';
export default {
  title: 'Components/Button',
  component: Button,
} as Meta;
const Template: Story = (args) => <Button {...args} />;
export const Default = Template.bind({});
Default.args = {
  // Add default props here
};