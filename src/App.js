import React from "react";
import { Banner } from "./componentes/Banner/Banner";
import { Formulario } from "./componentes/Formulario/Formulario";

function App() {
  const [colaboradores, setColaboradores] = React.useState([]);

  const aoColaboradorAdicionado = (colaborador) => {
    console.log(colaborador);
    setColaboradores([...colaboradores, colaborador]);
  };

  return (
    <div>
      <Banner />
      <Formulario aoColaboradorCadastrado={(colaborador) => aoColaboradorAdicionado(colaborador)} />
    </div>
  );
}

export default App;
