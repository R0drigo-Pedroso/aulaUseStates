import { useState } from "react";
// Crie um estado booleano "visivel", começando em true

const MostrarTexto = () => {
  const [visivel, setVisivel] = useState(true);
  return (
    <div>
      <button onClick={() => setVisivel((prev) => !prev)}>Mostra/Ocutar</button>
      {visivel ? <p>Você consegue ver essa mensagem?</p> : <p>Oculto</p>}
    </div>
  );
};

export default MostrarTexto;
