import React from "react";
import PnrTable from "./components/table/PnrTable";
import { ComponentStory, ComponentMeta } from "@storybook/react";

export default {
  title: "Design Atomic/dataTable",
  component: PnrTable,
  argTypes: {
    backgroundColor: { control: "color" }
  }
} as ComponentMeta<typeof PnrTable>;

const Template: ComponentStory<typeof PnrTable> = (args) => (
  <PnrTable {...args} />
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
