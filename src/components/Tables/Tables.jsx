import React from "react";
import "./tables.scss";
function Tables({ title }) {
  return (
    <>
      <h2 style={{ textAlign: "end" }}>{title ? title : "Tables"}</h2>
    </>
  );
}

export default Tables;
