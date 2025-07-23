import { useState } from "react";

function Pai() {
  const [mensagem, setMensagem] = useState("");

  return (
    <div>
      <Filho 
        texto={mensagem} 
        atualizarMensagem={() => setMensagem("Mensagem vinda do Filho!")} 
      />

      <button onClick={() => setMensagem("Nova mensagem!")}>
        Adicionar mensagem pelo componente Pai
      </button>
    </div>
  );
}

type FilhoProps = {
  texto: string;
  atualizarMensagem: () => void;
};

function Filho(props: FilhoProps) {
  return (
    <div>
      <p>{props.texto}</p>

      <button onClick={props.atualizarMensagem}>
        Atualizar mensagem pelo componente Filho
      </button>
    </div>
  );
}

export { Pai, Filho };
