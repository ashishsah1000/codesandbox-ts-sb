import React from "react";
import "./pnr-table.css";
import "bootstrap/dist/css/bootstrap.css";

type Data = {
  tableDetails: FlightBooking[];
  other: void;
  className: string;
};
type FlightBooking = {
  sno?: number;
  from: {
    code?: string;
    name?: string;
    date?: Date;
  };
  to: {
    code?: string;
    name?: string;
    date?: Date;
  };
  airline?: string;
  flight?: string;
  bookingClass?: string;
  status?: string;
};

const PnrTable = ({ tableDetails, ...rest }: Data) => {
  console.log(tableDetails);
  const TableBody = ({ data }: any) => {
    if (data)
      return (
        <tr>
          <th className="text-center" scope="row">
            {data?.sno}
          </th>
          <td>{data?.from.date}</td>
          <td>{data?.flight}</td>
          <td className="text-center">{data?.bookingClass}</td>
          <td>{data?.from.name}</td>
          <td>{data?.to.name}</td>
          <td>{data?.status}</td>
        </tr>
      );
    else return <tr>No Journey</tr>;
  };
  return (
    <div>
      <div className="table-wrap">
        <span className="text-tertiary text-uppercase font-weight-bold">
          ITINERARY DETAILS
        </span>
        <table className="table  table-borderless table-sm font-size-small">
          <thead>
            <tr>
              <th scope="col">Leg</th>
              <th scope="col">Date</th>
              <th scope="col">Flight</th>
              <th scope="col">Class</th>
              <th scope="col">From</th>
              <th scope="col">To</th>
              <th scope="col">Status</th>
            </tr>
          </thead>

          <tbody>
            {tableDetails.map((x) => (
              <TableBody data={x} />
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};
export default PnrTable;
