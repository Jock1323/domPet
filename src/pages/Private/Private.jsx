import React, { useState } from "react";
import { Routes, Route } from "react-router-dom";
import Header from "../../components/Header/Header";
import Sidebar from "../../components/SideBar/Sidebar";
import Home from "./Home/Home";
import Forms from "../../components/Forms/Forms";
import Tables from "../../components/Tables/Tables";
import "./private.scss";
function Private() {
  const [title, setTitle] = useState("");
  return (
    <>
      <h2>Private</h2>
      <Sidebar setTitle={setTitle} />
      <Header title={title} />
      <Routes>
        <Route path="/home" element={<Home title={title} />} />
        <Route path="/forms" element={<Forms title={title} />} />
        <Route path="/tables" element={<Tables title={title} />} />
      </Routes>
    </>
  );
}

export default Private;
