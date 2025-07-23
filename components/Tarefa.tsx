type TarefaProps = {
	titulo: string;
	concluida: boolean;
	onConcluir: () => void;
}

function Tarefa({ titulo, concluida, onConcluir }: TarefaProps) {
  return (
    <div>
      <span style={{ textDecoration: concluida ? "line-through" : "none" }}>
        {titulo}
      </span>
      {concluida === false && (
        <button onClick={onConcluir}>Concluir</button>
      )}
    </div>
  );
}

export default Tarefa;