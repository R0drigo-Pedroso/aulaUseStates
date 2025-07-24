import "./App.css";
import MostrarTexto from "./../components/MostrarTexto";
import { Pai } from "../components/PaiFilhoProps";
import Tarefa from "./../components/Tarefa";
import { useState } from "react";

function App() {
  const [tarefas, setTarefas] = useState([
    { id: 1, titulo: "Estudar React", concluida: false },
    { id: 2, titulo: "Ler um livro", concluida: false },
    { id: 3, titulo: "Fazer exercício", concluida: false },
  ]);

  function concluirTarefa(id: number, callback: () => void) {
    setTarefas((tarefasAntigas) => {
      const novasTarefas =
        tarefasAntigas.map((tarefa) =>
          tarefa.id === id ? { ...tarefa, concluida: true } : tarefa
        );
      callback()
      return novasTarefas;
    }
    );
  }

  return (
    <>
      <MostrarTexto />
      <Pai />

      <h1>Lista de Tarefas</h1>
      {tarefas.map((tarefa) => (
        <Tarefa
          key={tarefa.id}
          titulo={tarefa.titulo}
          concluida={tarefa.concluida}
          onConcluir={() => concluirTarefa(tarefa.id, () => {
            console.log(`Tarefa ${tarefa.id} concluída!`)
          })}
        />
      ))}
    </>
  );
}

export default App;
