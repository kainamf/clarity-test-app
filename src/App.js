import React, { useState } from "react";
import clarity from "@microsoft/clarity";
import useClarity from "./hooks/useClarity";

const App = () => {
  useClarity("qucfcofrn4");

  const [count, setCount] = useState(0);
  const [inputValue, setInputValue] = useState("");

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100 p-4">
      <div className="bg-white shadow-md rounded-lg p-6 w-full max-w-lg text-center">
        <h1 className="text-2xl font-bold mb-2">Teste do Microsoft Clarity</h1>
        <p className="text-gray-600 mb-4">Interaja com os elementos abaixo e verifique no Clarity.</p>

        {/* Botões */}
        <div className="flex gap-4 justify-center mb-4">
          <button
            className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 transition"
            onClick={() => clarity.event("botao_azul_clicado")}
          >
            Botão Azul
          </button>

          <button
            className="bg-green-500 text-white px-4 py-2 rounded-lg hover:bg-green-600 transition"
            onClick={() => clarity.event("botao_verde_clicado")}
          >
            Botão Verde
          </button>
        </div>

        {/* Contador */}
        <div className="mb-4">
          <p className="text-gray-700">Contador: <span className="font-semibold">{count}</span></p>
          <button
            className="mt-2 bg-purple-500 text-white px-4 py-2 rounded-lg hover:bg-purple-600 transition"
            onClick={() => {
              setCount(count + 1);
              clarity.event("contador_incrementado");
            }}
          >
            Incrementar
          </button>
        </div>

        {/* Campo de input */}
        <div>
          <input
            type="text"
            className="w-full border p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Digite algo..."
            value={inputValue}
            onChange={(e) => {
              setInputValue(e.target.value);
              clarity.event("input_digitado");
            }}
          />
        </div>
      </div>
    </div>
  );
};

export default App;