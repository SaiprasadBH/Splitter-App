import React from "react";
import { Meta, StoryFn } from "@storybook/react";
import App from "./App";

// Meta configuration for the App component story
export default {
  title: "TipCalculator/App",
  component: App,
} as Meta;

// Template for the story
const Template: StoryFn = (args) => <App {...args} />;

// Default story for the App component
export const Default = Template.bind({});
Default.args = {};

// This story will showcase the entire App component with initial default states
Default.storyName = "Default Tip Calculator";

// You can add more stories to demonstrate different scenarios if needed
