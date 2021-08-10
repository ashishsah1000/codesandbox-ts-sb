import React from "react";
import { CheckOutPassengers } from "./components/booking-card/CheckOutPassengers";
import { ComponentStory, ComponentMeta } from "@storybook/react";

export default {
  title: "Design Atomic/CheckOutPassengers",
  component: CheckOutPassengers,
  argTypes: {
    backgroundColor: { control: "color" }
  }
} as ComponentMeta<typeof CheckOutPassengers>;

const Template: ComponentStory<typeof CheckOutPassengers> = (args) => (
  <CheckOutPassengers {...args} />
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
