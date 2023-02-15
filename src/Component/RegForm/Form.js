import React, { useEffect, useState } from "react";
import "./Form.css";
import { Link } from "react-router-dom";
import Input from "./Input";

export const getdata = () => {
  const list = localStorage.getItem("lists");
  if (list) {
    return JSON.parse(localStorage.getItem("lists"));
  }
};

const Login = () => {
  const [user, setUser] = useState({
    name: "",
    email: "",
    confirmPassword: "",
    password: "",
  });

  const [records, setRecords] = useState([]);

  const HandleInput = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setUser({ ...user, [name]: value });
  };

  const HandleSubmit = (e) => {
    e.preventDefault();
    const newRecord = { ...user };
    setRecords([...records, newRecord]);
    setUser({ name: "", email: "", confirmPassword: "", password: "" });
  };

  // local storage
  useEffect(() => {
    localStorage.setItem("lists", JSON.stringify(records));
  }, [records]);

  return (
    <div className="main">
      <div className="login">
        <h1>Sign-Up Form</h1>
        <form action="#" onSubmit={HandleSubmit}>
          <Input
            UserName={user.name}
            HandleInput={HandleInput}
            name="name"
            labelName="Name"
          />
          <Input
            UserName={user.email}
            HandleInput={HandleInput}
            name="email"
            labelName="Email"
          />
          <Input
            UserName={user.confirmPassword}
            HandleInput={HandleInput}
            name="confirmPassword"
            labelName="ConfirmPassword"
          />
          <Input
            UserName={user.password}
            HandleInput={HandleInput}
            name="password"
            labelName="Password"
          />

          <input type="submit" name="" value="Submit" />
          <Link to="userData">
            <button>User Data</button>
          </Link>
        </form>
      </div>
    </div>
  );
};

export default Login;
