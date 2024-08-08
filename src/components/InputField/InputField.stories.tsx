import React from "react";
import { Meta, StoryFn } from "@storybook/react";
import InputField, { InputFieldProps } from "./InputField";
import "./InputField.module.css";

const meta: Meta = {
  title: "Components/InputField",
  component: InputField,
  argTypes: {
    typeofIcon: {
      control: { type: "radio", options: ["person", "dollar"] },
    },
  },
  tags: ["autodocs"],
};

export default meta;

const Template: StoryFn<InputFieldProps> = (args) => <InputField {...args} />;

export const Default = Template.bind({});
Default.args = {
  value: 10,
  label: "Enter Value",
  typeofIcon: "person",
};

export const ErrorState = Template.bind({});
ErrorState.args = {
  value: 0,
  label: "Enter Value",
  typeofIcon: "dollar",
};

export const CustomIcon = Template.bind({});
CustomIcon.args = {
  value: 25,
  label: "Custom Icon",
  typeofIcon: "dollar",
};
