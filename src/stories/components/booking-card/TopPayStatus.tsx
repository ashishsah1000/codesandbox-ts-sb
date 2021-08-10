import React from "react";
import "./checkout.css";
export const TopPayStatus = () => {
  return (
    <div className="row top-pay rounded">
      <div className="col-8 text-white">Your Net Payable amount is : 777 </div>
      <div className="col-4">
        <button className="btn btn-success   mt-n2"> Pay $777</button>
      </div>
    </div>
  );
};
