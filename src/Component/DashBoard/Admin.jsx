import React from "react";
import { useState } from "react";
import UserDetails from "./UserDetails";
import DefaultView from "./DefaultView";
import Blogs from "./Blogs";

const Admin = () => {
  const [view, setView] = useState("");

  const dashboardview = () => {
    let status = "";
    switch (view) {
      case "":
        status = <DefaultView />;
        break;
      case "userdetails":
        status = <UserDetails />;
        break;
        case "blogs":
        status = <Blogs/>;
        break;
    }
    return status;
  };
  return (
    <div>
      <div className="container-fluid">
        <div className="row">
          <aside className="col-12 col-lg-2 col-md-2 text-bg-success py-5">
            <h4>Admin Dashboard</h4>
            <button onClick={() => setView("userdetails")}>User Details</button>
            <button onClick={() => setView("blogs")}>Blogs</button>
          </aside>
          <div className="col-12 col-lg-10 col-md-10  text-center p-5">
            {dashboardview()}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Admin;
