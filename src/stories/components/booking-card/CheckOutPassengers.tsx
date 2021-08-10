import React from "react";
import "./checkout.css";

export const CheckOutPassengers = () => {
  return (
    <div>
      <h4 className="text-secondary">Passengers</h4>
      <table className="table">
        <thead className="border-top border-bottom border-secondary">
          <tr>
            <th scope="col">Type</th>
            <th scope="col">Gender</th>
            <th scope="col">First Name</th>
            <th scope="col">Last Name</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <th scope="row">1</th>
            <td>Mark</td>
            <td>Otto</td>
            <td>@mdo</td>
          </tr>
          <tr>
            <th scope="row">2</th>
            <td>Jacob</td>
            <td>Thornton</td>
            <td>@fat</td>
          </tr>
          <tr>
            <th scope="row">3</th>
            <td>Larry</td>
            <td>the Bird</td>
            <td>@twitter</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};
