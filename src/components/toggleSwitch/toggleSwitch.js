import React from "react";
import "./toggleSwitch.css";
  
const ToggleSwitch = ({ label, checked, onChange }) => {
  console.log("checked", checked);

  return (
    <div className="container">
      {label}{" "}
      <div className="toggle-switch">
        <input type="checkbox" className="checkbox" checked={checked} onChange ={onChange}
               name={label} id={label} />
        <label className="label" htmlFor={label}>
          <span className="inner" />
          <span className="switch" />
        </label>
      </div>
    </div>
  );
};
  
export default ToggleSwitch;