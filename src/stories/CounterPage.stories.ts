import type { Meta, StoryObj } from "@storybook/react";
import {CounterPage} from "../components/Counter";

const meta = {
  title: "Example/CounterPage",
  component: CounterPage,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
} satisfies Meta<typeof CounterPage>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
