import { useState } from "react";

const Ejercicio8 = () => {
  const [parrafo, setParrafo] = useState("");
  const caracteres = parrafo.replace(/\s/g, "");
  const palabras = parrafo
    .trim()
    .split(" ")
    .filter((p) => p !== "");

  const limpiar = () => {
    setParrafo("");
  };

  return (
    <div className="contadorPalabrasCaracteres">
      <h1>Contador palabras y caracteres</h1>
      <div>
        <textarea
          value={parrafo}
          onChange={(e) => setParrafo(e.target.value)}
        />
        <p>Caracteres: {caracteres.length}</p>
        <p>Palabras: {palabras.length}</p>
      </div>
      <div>
        <button onClick={() => limpiar()}>Limpiar</button>
      </div>
    </div>
  );
};

export default Ejercicio8;
