import React from "react";
import "./top-pnr-details.css";
import "bootstrap/dist/css/bootstrap.css";
import { PNR } from "../../../types/Types";
import { Printer } from "react-feather";
import { Circle } from "react-feather";
import { Mail } from "react-feather";

type input = PNR;

const TopPnrDetails = ({
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
    <div className="row d-flex pnr-details-top">
      <div className="col-8 pnr-text">{pnrNo}</div>
      <div className="col-4 d-flex .justify-content-center">
        <i>
          <Printer />
          <Mail />
          <Circle />
        </i>
      </div>
    </div>
  );
};
export default TopPnrDetails;
