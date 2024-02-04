import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./Login";
import Admin from "./DashBoard/Admin";
import UserDetails from "./DashBoard/UserDetails";
import Blogs from "./DashBoard/Blogs";
import EditData from "./DashBoard/EditData";
import NoPage from "./DashBoard/NoPage";

const Routing = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/admin" element={<Admin />} />
        <Route path="/userdetails" element={<UserDetails />} />
        <Route path="/blogs" element={<Blogs />} />
        <Route path="/editdata/:id" element={<EditData />} />
        <Route path="*" element={<NoPage />} />
      </Routes>
    </Router>
  );
};

export default Routing;
