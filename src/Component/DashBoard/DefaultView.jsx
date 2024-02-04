import React from "react";
import adminimg from "./assets/adminimg.avif";

const DefaultView = () => {
  return (
    <div>
      <h1>Wellcome to Dashboard</h1>
      <img src={adminimg} className="w-50" />
    </div>
  );
};

export default DefaultView;
