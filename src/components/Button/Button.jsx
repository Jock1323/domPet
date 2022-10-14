import React from "react";
import "./button.scss";
function Button({ children, className }) {
  return <button className={`btn ${className}`}>{children}</button>;
}

export default Button;
