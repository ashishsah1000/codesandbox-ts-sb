import React from "react";
import "./person-detail.css";
import "bootstrap/dist/css/bootstrap.css";
import { PNR } from "../../../types/Types";
import { Send } from "react-feather";
import { Circle } from "react-feather";
import { Mail } from "react-feather";

type input = PNR;

const PersonDetail = ({
  name,
  bookings,
  className,
  others,
  ...rest
}: input) => {
  return (
    <div className="row d-flex ">
      <div className="col-10 col-xs-9  pnr-text">{name}</div>
      <div className="col-2  col-xs-3 flight-details">
        <div>
          <h1>
            <Send size={38} />
          </h1>
        </div>
        <div className="n-flight">
          <span>{bookings?.length}</span>
        </div>
      </div>
    </div>
  );
};
export default PersonDetail;
