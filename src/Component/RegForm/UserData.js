import React, { useState } from "react";
import "./Form.css";
import { getdata } from "./Form";
// import DumyData from "../JSON/DumyData.json";

const UserData = () => {
  const [AllUsers] = useState(getdata());
  return (
    <div className="table">
      <h1>USER INFORMATION</h1>
      <table>
        <tbody>
          <tr>
            <td>ID</td>
            <td>Name</td>
            <td>Mail</td>
            <td>Password</td>
            <td>ConPassword</td>
          </tr>
        </tbody>

        {/* Dumy Data from Json file
        {DumyData.map((element, index) => (
          <tbody key={index}>
            <tr>
              <td>{index}</td>
              <td>{element.name}</td>
              <td>{element.email}</td>
              <td>{element.password}</td>
              <td>{element.confirmPassword}</td>
            </tr>
          </tbody>
        ))} */}

        {/* All User Records */}
        {AllUsers.map((element, index) => (
          <tbody key={index}>
            <tr>
              <td>{index}</td>
              <td>{element.name}</td>
              <td>{element.email}</td>
              <td>{element.password}</td>
              <td>{element.confirmPassword}</td>
            </tr>
          </tbody>
        ))}
      </table>
    </div>
  );
};

export default UserData;
