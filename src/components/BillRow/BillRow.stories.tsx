import { Meta, StoryFn } from "@storybook/react";
import BillRow, { BillRowProps } from "./BillRow";

// Set up the default export with the component's title and the component itself
export default {
  title: "Components/BillRow",
  component: BillRow,
} as Meta;

// Create a template for the BillRow component
const Template: StoryFn<BillRowProps> = (args) => <BillRow {...args} />;

// Default story for the BillRow component
export const Default = Template.bind({});
Default.args = {
  label: "Total",
  value: 123.45,
};

// Story with a custom label and value as a string
export const CustomStringValue = Template.bind({});
CustomStringValue.args = {
  label: "Tip",
  value: "20%",
};

// Story with a smaller value to display formatting
export const SmallValue = Template.bind({});
SmallValue.args = {
  label: "Total",
  value: 4.5,
};
