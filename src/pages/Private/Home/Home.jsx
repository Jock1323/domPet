import React from "react";
import "./home.scss";
function Home({ title }) {
  return (
    <>
      <h1 style={{ textAlign: "end" }}>{title ? title : "Dashboard"}</h1>
    </>
  );
}

export default Home;
