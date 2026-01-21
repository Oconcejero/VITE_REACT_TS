import { useState } from "react";

const Ejercicio4 = () => {
  const [texto, setTexto] = useState("");
  const [filtro, setFiltro] = useState("");

  const palabras = texto.split(" ");

  const coincidencias = palabras.filter((palabra) =>
    palabra.toLowerCase().includes(filtro.toLocaleLowerCase())
  );

  return (
    <div className="filtroBusqueda">
      <h1>Filtro de búsquedas en tiempo real</h1>

      <textarea
        value={texto}
        onChange={(e) => setTexto(e.target.value)}
      ></textarea>
      <input
        type="text"
        value={filtro}
        onChange={(e) => setFiltro(e.target.value)}
      ></input>
      <div>
        <h4>Coincidencias</h4>
        {coincidencias.join(" ")}
      </div>
    </div>
  );
};

export default Ejercicio4;
