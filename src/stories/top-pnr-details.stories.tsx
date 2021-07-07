import React from "react";
import TopPnrDetails from "./components/TopPnrDetails";
import { ComponentStory, ComponentMeta } from "@storybook/react";

export default {
  title: "Design Atomic/FirstHeader",
  component: TopPnrDetails,
  argTypes: {
    backgroundColor: { control: "color" }
  }
} as ComponentMeta<typeof TopPnrDetails>;

const Template: ComponentStory<typeof TopPnrDetails> = (args) => (
  <TopPnrDetails {...args} />
);
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
