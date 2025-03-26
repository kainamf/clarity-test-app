import React, { useState } from "react";
import useClarity from "./hooks/useClarity";

const App = () => {
  useClarity("qucfcofrn4");

  const [workouts, setWorkouts] = useState({
    A: [],
    B: [],
    C: [],
    D: [],
    E: []
  });

  const handleAddExercise = (series) => {
    const exercise = prompt("Digite o nome do exercício:");
    if (exercise) {
      setWorkouts((prevWorkouts) => ({
        ...prevWorkouts,
        [series]: [...prevWorkouts[series], exercise]
      }));
      window.clarity("event", `exercicio_adicionado`, { series, exercise });
    }
  };

  const handleButtonClick = (series) => {
    window.clarity("event", `adicionar_exercicio`, { series });
    handleAddExercise(series);
  };

  return (
    <div className="min-h-screen bg-gray-100 p-4">
      <div className="max-w-4xl mx-auto space-y-8">
        <h1 className="text-4xl font-bold text-center text-indigo-600 mb-6">
          Planejamento de Treino
        </h1>

        {/* Série A */}
        <WorkoutSeries
          title="Série A: Peito, Ombro"
          exercises={workouts.A}
          onAddExercise={() => handleButtonClick("A")}
        />

        {/* Série B */}
        <WorkoutSeries
          title="Série B: Posterior e Glúteo"
          exercises={workouts.B}
          onAddExercise={() => handleButtonClick("B")}
        />

        {/* Série C */}
        <WorkoutSeries
          title="Série C: Costas, Trapézio"
          exercises={workouts.C}
          onAddExercise={() => handleButtonClick("C")}
        />

        {/* Série D */}
        <WorkoutSeries
          title="Série D: Quadríceps e Panturrilha"
          exercises={workouts.D}
          onAddExercise={() => handleButtonClick("D")}
        />

        {/* Série E */}
        <WorkoutSeries
          title="Série E: Bíceps e Tríceps"
          exercises={workouts.E}
          onAddExercise={() => handleButtonClick("E")}
        />
      </div>
    </div>
  );
};

// Componente para cada série de treino
const WorkoutSeries = ({ title, exercises, onAddExercise }) => {
  return (
    <div className="bg-white p-6 rounded-lg shadow-md">
      <h2 className="text-2xl font-semibold text-indigo-500">{title}</h2>
      <ul className="mt-4 space-y-2">
        {exercises.length === 0 ? (
          <li className="text-gray-500">Nenhum exercício adicionado</li>
        ) : (
          exercises.map((exercise, index) => (
            <li key={index} className="text-gray-700">{exercise}</li>
          ))
        )}
      </ul>
      <button
        className="mt-4 w-full bg-indigo-500 text-white py-2 rounded-lg hover:bg-indigo-600"
        onClick={onAddExercise}
      >
        Adicionar Exercício
      </button>
    </div>
  );
};

export default App;