import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const Login = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [phone, setPhone] = useState("");
  const [gender, setGender] = useState("");
  const [country, setCountry] = useState("");
  const [state, setState] = useState("");
  const [city, setCity] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    //validation purpose
    if (!name.trim()) {
      alert("Please enter your name.");
      return;
    }
    if (!email.trim()) {
      alert("Please enter your email.");
      return;
    }
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email.trim())) {
      alert("Please enter a valid email address.");
      return;
    }
    if (!password.trim()) {
      alert("Please enter your password.");
      return;
    }
    if (!password.trim()) {
      alert("Please enter your password.");
      return;
    }
    if (!phone.trim()) {
      alert("Please enter your phone number.");
      return;
    }

    if (!gender) {
      alert("Please select your gender.");
      return;
    }

    if (!country.trim()) {
      alert("Please enter your country.");
      return;
    }

    if (!state.trim()) {
      alert("Please enter your state.");
      return;
    }

    if (!city.trim()) {
      alert("Please enter your city.");
      return;
    }

    axios
      .post("http://localhost:4000/userdetails", {
        name,
        email,
        password,
        phone,
        gender,
        country,
        state,
        city,
      })
      .then(() => {
        alert("Register Successfully");
        setName("");
        setEmail("");
        setPassword("");
        setPhone("");
        setGender("");
        setCountry("");
        setState("");
        setCity("");
        navigate("/admin");
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <>
      <div className="body">
        <div className="container p-5 col-lg-9 ">
          <div className="card">
            <div className="row  mx-auto">
              <h1 className="text-center">Registration Form</h1>
              <form onSubmit={handleSubmit}>
                <div className="m-3">
                  <label>Name:</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    placeholder="Enter your name"
                    value={name}
                    onChange={(e) => {
                      setName(e.target.value);
                    }}
                    className="form-control"
                  />
                </div>
                <div className="m-3">
                  <label htmlFor="email">Email:</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    placeholder="Enter your email"
                    value={email}
                    onChange={(e) => {
                      setEmail(e.target.value);
                    }}
                    className="form-control"
                  />
                </div>
                <div className="m-3">
                  <label htmlFor="password">Password:</label>
                  <input
                    type="password"
                    id="password"
                    name="password"
                    placeholder="Email Password"
                    value={password}
                    onChange={(e) => {
                      setPassword(e.target.value);
                    }}
                    className="form-control"
                  />
                </div>
                <div className="m-3">
                  <label>Mobile Number:</label>
                  <input
                    type="tel"
                    id="number"
                    name="phone"
                    placeholder="Mobile Number"
                    value={phone}
                    onChange={(e) => {
                      setPhone(e.target.value);
                    }}
                    className="form-control"
                  />
                </div>
                <div className="m-3">
                  <label htmlFor="gender">Gender:</label>
                  <select
                    id="gender"
                    name="gender"
                    value={gender}
                    onChange={(e) => {
                      setGender(e.target.value);
                    }}
                    className="form-control"
                  >
                    <option value="">Select</option>
                    <option value="male">Male</option>
                    <option value="female">Female</option>
                    <option value="other">Other</option>
                  </select>
                </div>
                <div className="m-3">
                  <label htmlFor="country">Country:</label>
                  <input
                    type="text"
                    id="country"
                    name="country"
                    placeholder="Enter Country"
                    value={country}
                    onChange={(e) => {
                      setCountry(e.target.value);
                    }}
                    className="form-control"
                  />
                </div>
                <div className="m-3">
                  <label htmlFor="state">State:</label>
                  <input
                    type="text"
                    id="state"
                    name="state"
                    placeholder="Enter State"
                    value={state}
                    onChange={(e) => {
                      setState(e.target.value);
                    }}
                    className="form-control"
                  />
                </div>
                <div className="m-3">
                  <label htmlFor="city">City:</label>
                  <input
                    type="text"
                    id="city"
                    name="city"
                    placeholder="Enter city"
                    value={city}
                    onChange={(e) => {
                      setCity(e.target.value);
                    }}
                    className="form-control"
                  />
                  <input
                    type="submit"
                    className="form-control btn-primary btn mt-3"
                  />
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;