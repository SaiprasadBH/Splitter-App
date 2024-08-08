import type { Meta, StoryObj } from "@storybook/react";
import { Counter, CounterProps } from "../components/Counter";

const meta: Meta<CounterProps> = {
  title: "Example/Counter",
  component: Counter,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    count: { control: "number" },
    label: { control: "text" },
    onIncrement: { action: "increment clicked" },
    onDecrement: { action: "decrement clicked" },
  },
};

export default meta;
type Story = StoryObj<CounterProps>;

export const Default: Story = {
  args: {
    count: 0,
    label: "Counter",
    onIncrement: () => {},
    onDecrement: () => {},
  },
};

export const WithCount: Story = {
  args: {
    count: 10,
    label: "Counter",
    onIncrement: () => {},
    onDecrement: () => {},
  },
};
