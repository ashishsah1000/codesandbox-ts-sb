import React from "react";
import "./card.css";
import "bootstrap/dist/css/bootstrap.css";
import { PNR } from "../../../types/Types";
import TopPnrDetails from "../../components/top/TopPnrDetails";
import PersonDetail from "../../components/secondtop/PersonDetail";
type input = PNR;

const Card = ({
  pnrNo,
  name,
  email,
  mail,
  print,
  bookings,
  className,
  others,
  passengers,
  ...rest
}: input) => {
  return (
    <div className="flight-card">
      <TopPnrDetails pnrNo="ABCDEF" />
      <PersonDetail name="Hey User" bookings={bookings} />
    </div>
  );
};
export default Card;
