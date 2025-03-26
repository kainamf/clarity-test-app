import React from "react";
import useClarity from "./hooks/useClarity";

const App = () => {
  useClarity(qucfcofrn4);

  return (
    <div>
      <h1>Teste do Microsoft Clarity</h1>
      <button onClick={() => window.clarity("event", "botao_clicado")}>
        Clique para testar evento
      </button>
    </div>
  );
};

export default App;
