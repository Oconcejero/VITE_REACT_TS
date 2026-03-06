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
      <header style={{textAlign: 'center', marginBottom: '10px'}}>
        <h1 style={{fontSize: '1.5rem'}}>Filtro en Tiempo Real</h1>
        <p style={{color: '#666', fontSize: '0.85rem'}}>Escribe un texto y luego filtra palabras</p>
      </header>
      <textarea
        placeholder="Introduce aquí tu texto..."
        value={texto}
        onChange={(e) => setTexto(e.target.value)}
      ></textarea>
      <input
        type="text"
        placeholder="Buscar palabras..."
        value={filtro}
        onChange={(e) => setFiltro(e.target.value)}
      ></input>
      <div className="tags-wrapper">
          {coincidencias.length > 0 ? (
            coincidencias.map((palabra, index) => (
              <span key={index} className="tag-coincidencia">
                {palabra}
              </span>
            ))
          ) : (
            <span style={{color: '#444', fontSize: '0.9rem'}}>Sin resultados</span>
          )}
        </div>
    </div>
  );
};

export default Ejercicio4;
