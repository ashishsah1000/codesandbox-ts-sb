import React from "react";
import PersonDetail from "./components/secondtop/PersonDetail";
import { ComponentStory, ComponentMeta } from "@storybook/react";

export default {
  title: "Design Atomic/FirstHeader",
  component: PersonDetail,
  argTypes: {
    backgroundColor: { control: "color" }
  }
} as ComponentMeta<typeof PersonDetail>;

const Template: ComponentStory<typeof PersonDetail> = (args) => (
  <PersonDetail {...args} />
);
export const primary = Template.bind({});
primary.args = {
  pnrNo: "VXCCTT",
  name: "Random Name",
  email: "ashishsah1000@gmail.com",
  mail: 0,
  print: 0,
  bookings: [],
  passengers: ""
};
