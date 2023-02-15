import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Form from "./Form";
import UserData from "./UserData";
const Index = () => {
  return (
    <BrowserRouter>
      <div>
        <Routes>
          <Route path="/" element={<Form />}></Route>
          <Route path="userData" element={<UserData />}></Route>
        </Routes>
      </div>
    </BrowserRouter>
  );
};

export default Index;
