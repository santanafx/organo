import React from "react";
import "./ListaSuspensa.css";

export const ListaSuspensa = (props) => {
  return (
    <div className="Lista-suspensa">
      <label>{props.label}</label>
      <select>
        {props.itens.map((item) => (
          <option key={item}>{item}</option>
        ))}
      </select>
    </div>
  );
};