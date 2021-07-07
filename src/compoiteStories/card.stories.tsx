import React from "react";
import Card from "../stories/composite/card-1/Card";
import { ComponentStory, ComponentMeta } from "@storybook/react";

export default {
  title: "Design Composite/Card",
  component: Card,
  argTypes: {
    backgroundColor: { control: "color" }
  }
} as ComponentMeta<typeof Card>;

const Template: ComponentStory<typeof Card> = (args) => <Card {...args} />;
export const primary = Template.bind({});
primary.args = {
  pnrNo: "VXCCTT",
  name: "ashish",
  email: "ashishsah1000@gmail.com",
  mail: 0,
  print: 0,
  bookings: [],
  passengers: ""
};
