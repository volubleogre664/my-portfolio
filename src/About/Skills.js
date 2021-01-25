import React from "react";
import "./Skills.css";

function Skills({ name, icon, value }) {
  return (
    <div className="skillSet">
      <div className="skillSet__header">
        <img
          className="skillSet__img"
          src={icon}
          alt="taken from fontawesome"
        />

        <span className="skillSet__name">{name + " "}</span>
      </div>
      <div className="skillSet__progress">
        <div
          style={{ width: value + "%" }}
          className="skillSet__progressValue"
        ></div>
      </div>
    </div>
  );
}

export default Skills;
