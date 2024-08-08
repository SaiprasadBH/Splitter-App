// TipCalculator.stories.tsx

import React from "react";
import { Meta, StoryFn } from "@storybook/react";
import TipCalculator, { TipCalculatorProp } from "./TipCalculator";

export default {
  title: "Components/TipCalculator",
  component: TipCalculator,
  argTypes: {
    tipAmount: { control: "text" },
    totalAmount: { control: "text" },
    onReset: { action: "reset" },
  },
} as Meta;

const Template: StoryFn<TipCalculatorProp> = (args) => (
  <TipCalculator {...args} />
);

export const Default = Template.bind({});
Default.args = {
  tipAmount: "0",
  totalAmount: "0",
  onReset: () => console.log("Reset clicked"),
};
