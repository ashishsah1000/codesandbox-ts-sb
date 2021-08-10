import React from "react";
import "./checkout.css";
export const TopPayStatus = () => {
  return (
    <div className="row top-pay rounded bg-secondary p-3">
      <div className="col-8 mt-1 align-center text-justify">
        Your Net Payable amount is <strong>$ 777 </strong>
      </div>
      <div className="col-4">
        <button className="btn btn-sm btn-success col-12  mt-n2">
          {" "}
          Pay $777
        </button>
      </div>
    </div>
  );
};
