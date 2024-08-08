import React from "react";
import { Meta, StoryFn } from "@storybook/react";
import TipSelector, { TipSelectorProps } from "./TipSelector";

export default {
  title: "Components/TipSelector",
  component: TipSelector,
} as Meta;

const Template: StoryFn<TipSelectorProps> = (args) => <TipSelector {...args} />;

export const Default = Template.bind({});
Default.args = {
  onSelectTip: (tip: number | "Custom") => alert(`Tip selected: ${tip}`),
};
