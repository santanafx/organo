import React from "react";
import "./CampoTexto.css";

export const CampoTexto = (props) => {
  return (
    <div className="campo-texto">
      <label>{props.label}</label>
      <input placeholder={props.placeholder} />
    </div>
  );
};
