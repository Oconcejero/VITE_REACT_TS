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
      <header style={{textAlign: 'center', marginBottom: '10px'}}>
        <h1>Word Counter</h1>
        <p style={{color: '#666', fontSize: '0.85rem'}}>Análisis de texto en tiempo real</p>
      </header>
      <div>
        <textarea
          placeholder="Empieza a escribir o pega tu texto aquí..."
          value={parrafo}
          onChange={(e) => setParrafo(e.target.value)}
        />
        <div className="stats-container">
          <div className="stat-pill">
            <p>Caracteres: {caracteres.length}</p>
          </div>
          <div className="stat-pill">
            Palabras: <span>{palabras.length}</span>
          </div>
        </div>
      </div>
      <div>
        <button className="btn-limpiar-lab" onClick={() => limpiar()}>Limpiar</button>
      </div>
    </div>
  );
};

export default Ejercicio8;
