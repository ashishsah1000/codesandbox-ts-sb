import React from "react";
import { TopPayStatus } from "./components/booking-card/TopPayStatus";
import { ComponentStory, ComponentMeta } from "@storybook/react";

export default {
  title: "Design Atomic/TopPayStatus",
  component: TopPayStatus,
  argTypes: {
    backgroundColor: { control: "color" }
  }
} as ComponentMeta<typeof TopPayStatus>;

const Template: ComponentStory<typeof TopPayStatus> = (args) => (
  <TopPayStatus {...args} />
);
export const primary = Template.bind({});
primary.args = {
  tableDetails: [
    {
      sno: 1,
      from: {
        code: "xxaa",
        name: "Jhumritaliya",
        date: "30-FEB-2019"
      },
      to: {
        code: "xxaa",
        name: "Jhumritaliya",
        date: "30-FEB-2019"
      },
      airline: "IRCTC",
      flight: "Falcon Raptor",
      bookingClass: "D",
      status: "Destroyed"
    }
  ]
};
