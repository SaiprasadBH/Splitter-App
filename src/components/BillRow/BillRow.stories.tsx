// BillRow.stories.tsx

import React from "react";
import { Meta, StoryFn } from "@storybook/react";
import BillRow, { BillRowProps } from "./BillRow";

export default {
  title: "Components/BillRow",
  component: BillRow,
  argTypes: {
    label1: { control: "text" },
    label2: { control: "text" },
    price: { control: "text" },
  },
} as Meta;

const Template: StoryFn<BillRowProps> = (args) => <BillRow {...args} />;

export const Default = Template.bind({});
Default.args = {
  label1: "Subtotal",
  label2: "month",
  price: "120.00",
};

export const Tip = Template.bind({});
Tip.args = {
  label1: "Tip",
  label2: "10%",
  price: "15.00",
};

export const Total = Template.bind({});
Total.args = {
  label1: "Total",
  label2: "due",
  price: "135.00",
};
