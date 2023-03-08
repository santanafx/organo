import React from "react";
import "./CampoTexto.css";

export const CampoTexto = (props) => {
  // let valor = "";

  // const [valor, setValor] = React.useState("");

  const aoDigitado = (evento) => {
    // valor = evento.target.value;

    // setValor(evento.target.value);

    // console.log(valor);

    props.aoAlterado(evento.target.value);
  };

  return (
    <div className="campo-texto">
      <label>{props.label}</label>
      <input value={props.valor} onChange={aoDigitado} required={props.obrigatorio} placeholder={props.placeholder} />
    </div>
  );
};
