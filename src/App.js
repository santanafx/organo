import React from "react";
import { Banner } from "./componentes/Banner/Banner";
import { Formulario } from "./componentes/Formulario/Formulario";
import { Time } from "./componentes/Time/Time";

function App() {
  const times = [
    { nome: "Programação", corPrimaria: "#57c278", corSecundaria: "#d9f7e9" },
    { nome: "Front-End", corPrimaria: "#82cffa", corSecundaria: "#e8f8ff" },
    { nome: "Data Science", corPrimaria: "#a6d157", corSecundaria: "#f0f8e2" },
    { nome: "Devops", corPrimaria: "#e06b69", corSecundaria: "#fde7e8" },
    { nome: "UX e Design", corPrimaria: "#db6ebf", corSecundaria: "#fae9f5" },
    { nome: "Mobile", corPrimaria: "#ffba05", corSecundaria: "#fff5d9" },
    { nome: "Inovação e Gestão", corPrimaria: "#ff8a29", corSecundaria: "#ffeedf" },
  ];

  const [colaboradores, setColaboradores] = React.useState([]);

  const aoColaboradorAdicionado = (colaborador) => {
    console.log(colaborador);
    setColaboradores([...colaboradores, colaborador]);
  };

  return (
    <div>
      <Banner />
      <Formulario times={times.map((time) => time.nome)} aoColaboradorCadastrado={(colaborador) => aoColaboradorAdicionado(colaborador)} />

      {times.map((time) => (
        <Time key={time.nome} nome={time.nome} corPrimaria={time.corPrimaria} corSecundaria={time.corSecundaria} />
      ))}
    </div>
  );
}

export default App;
