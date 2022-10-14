import React from "react";
import "./input.scss";
function Input({ className, children, placeholder }) {
  return (
    <div>
      <label className="label__component">{children} *</label>
      <input
        type="text"
        className={`input ${className}`}
        id="label"
        placeholder={placeholder}
      />
    </div>
  );
}

export default Input;
