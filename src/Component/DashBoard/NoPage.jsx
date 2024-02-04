import React from "react";
import errorimg from "./assets/errorimg.avif";
const NoPage = () => {
  return (
    <div className="container p-5 text-center ">
      <img className="w-50 " src={errorimg} />
      <h2>
        <strong className="text-bg-danger p-5">Page is Not Found</strong>
      </h2>
    </div>
  );
};
export default NoPage;