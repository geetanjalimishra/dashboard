import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

const EditData = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [phone, setPhone] = useState("");
  const [gender, setGender] = useState("");
  const [country, setCountry] = useState("");
  const [state, setState] = useState("");
  const [city, setCity] = useState("");
  const navigate= useNavigate();

  const { id } = useParams();
  useEffect(() => {
    axios
      .get(`http://localhost:4000/userdetails/${id}`)
      .then((res) => {
        setName(res.data.name);
        setEmail(res.data.email);
        setPassword(res.data.password);
        setPhone(res.data.phone);
        setGender(res.data.gender);
        setCountry(res.data.country);
        setState(res.data.state);
        setCity(res.data.city);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [id]);

  const updateUser = (e) => {
    e.preventDefault();
    axios
      .put(`http://localhost:4000/userdetails/${id}`, {
        name,
        email,
        password,
        phone,
        gender,
        country,
        state,
        city,
      })
      .then((res) => {
        alert("data Updated Successfully");
        navigate("/admin");
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div className="row body">
      <div className="mx-auto text-center container p-5 c0l-12 col-lg-6">
        <h1>Update Blog</h1>
        <form onSubmit={updateUser}>
          <input
            type="text"
            placeholder="name"
            name="name"
            className="form-control mb-3"
            value={name}
            onChange={(e) => {
              setName(e.target.value);
            }}
          ></input>
          <input
            type="text"
            placeholder="email"
            name="email"
            className="form-control mb-3"
            value={email}
            onChange={(e) => {
              setEmail(e.target.value);
            }}
          ></input>
          <input
            type="text"
            placeholder="password"
            name="password"
            className="form-control mb-3"
            value={password}
            onChange={(e) => {
              setPassword(e.target.value);
            }}
          ></input>
          <input
            type="text"
            placeholder="phone"
            name="phone"
            className="form-control mb-3"
            value={phone}
            onChange={(e) => {
              setPhone(e.target.value);
            }}
          ></input>
          <input
            type="text"
            placeholder="gender"
            name="gender"
            className="form-control mb-3"
            value={gender}
            onChange={(e) => {
              setGender(e.target.value);
            }}
          ></input>
          <input
            type="text"
            placeholder="country"
            name="country"
            className="form-control mb-3"
            value={country}
            onChange={(e) => {
              setCountry(e.target.value);
            }}
          ></input>
          <input
            type="text"
            placeholder="state"
            name="state"
            className="form-control mb-3"
            value={state}
            onChange={(e) => {
              setState(e.target.value);
            }}
          ></input>
          <input
            type="text"
            placeholder="city"
            name="city"
            className="form-control mb-3"
            value={city}
            onChange={(e) => {
              setCity(e.target.value);
            }}
          ></input>
          <button className="btn btn-danger">submit</button>
        </form>
      </div>
    </div>
  );
};

export default EditData;
