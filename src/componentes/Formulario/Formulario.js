import React from "react";
import { Botao } from "../Botao/Botao";
import { CampoTexto } from "../CampoTexto/CampoTexto";
import { ListaSuspensa } from "../ListaSuspensa/ListaSuspensa";
import "./Formulario.css";

export const Formulario = (props) => {
  const [nome, setNome] = React.useState("");
  const [cargo, setCargo] = React.useState("");
  const [imagem, setImagem] = React.useState("");
  const [time, setTime] = React.useState("");

  const times = ["Programação", "Front-End", "Data Science", "Devops", "UX e Design", "Mobile", "Inovação e Gestão"];

  const aoSalvar = (evento) => {
    evento.preventDefault();
    // console.log("Form foi submetido =>", nome, cargo, imagem, time);
    props.aoColaboradorCadastrado({
      nome,
      cargo,
      imagem,
      time,
    });
  };

  return (
    <section className="formulario">
      <form onSubmit={aoSalvar}>
        <h2>Preencha os dados para criar o card do colaborador</h2>
        <CampoTexto obrigatorio={true} label="Nome" placeholder="Digite seu nome" valor={nome} aoAlterado={(valor) => setNome(valor)} />
        <CampoTexto obrigatorio={true} label="Cargo" placeholder="Digite seu cargo" valor={cargo} aoAlterado={(valor) => setCargo(valor)} />
        <CampoTexto obrigatorio={true} label="Imagem" placeholder="Digite o endereço da imagem" valor={imagem} aoAlterado={(valor) => setImagem(valor)} />
        <ListaSuspensa obrigatorio={true} label="Time" itens={props.times} valor={time} aoAlterado={(valor) => setTime(valor)} />
        <Botao>Criar Card</Botao>
      </form>
    </section>
  );
};
