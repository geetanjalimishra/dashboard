import React, { useEffect, useMemo, useState } from "react";
import axios from "axios";
import { NavLink, useParams } from "react-router-dom";

const UserDetails = () => {
  const [totalUsers, setTotalUsers] = useState(0);
  const [enquiries, setEnquiries] = useState([]);
  //Edit data

  //get data
  useEffect(() => {
    axios
      .get("http://localhost:4000/userdetails")
      .then((res) => {
        setEnquiries(res.data);
        setTotalUsers(enquiries.length);
      })
      .catch((err) => {
        console.log(err);
      });
  });

  //delete data
  const DeleteUser = (userId) => {
    axios
      .delete(`http://localhost:4000/userdetails/${userId}`)
      .then(() => {
        alert("deleted Successfully");
      })
      .catch((err) => {
        console.log(err);
      });
  };
  return (
    <>
      <div className="table-responsive">
        <table className="table">
          <thead className=" table-dark">
            <tr>
              <th scope="col">Name</th>
              <th scope="col">Email</th>
              <th scope="col">Password</th>
              <th scope="col">Phone Number</th>
              <th scope="col">Gender</th>
              <th scope="col">State</th>
              <th scope="col">City</th>
              <th scope="col">Action</th>
            </tr>
          </thead>
          <tbody>
            {enquiries.map((user) => {
              return (
                <tr>
                  <td>{user.name}</td>
                  <td>{user.email}</td>
                  <td>{user.password}</td>
                  <td>{user.phone}</td>
                  <td>{user.gender}</td>
                  <td>{user.state}</td>
                  <td>{user.city}</td>
                  <td >
                    <NavLink to={`/editdata/${user.id}`}>
                      <button className="text-bg-primary btn m-2">Edit</button>
                    </NavLink>
                    <button
                      onClick={() => {
                        DeleteUser(user.id);
                      }}
                      className="text-bg-danger btn"
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
        <div className="p-5">
          <button className="text-bg-success btn">
            No Of Users : {totalUsers}
          </button>
        </div>
      </div>
    </>
  );
};
export default UserDetails;
