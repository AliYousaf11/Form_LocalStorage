import React from "react";

const Input = ({ UserName, HandleInput, name, labelName }) => {
  return (
    <div className="inputBox">
      <input
        type="text"
        value={UserName}
        onChange={HandleInput}
        autoComplete="off"
        name={name}
        required
      />
      <label htmlFor="name">{labelName}</label>
    </div>
  );
};

export default Input;
