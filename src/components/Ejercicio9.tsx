import { useState } from "react";

type Tarea = { tarea: string; completada: boolean };

const Ejercicio9 = () => {
  const [lista, setLista] = useState<Tarea[]>(
    JSON.parse(localStorage.getItem("tareas") || "[]") ?? []
  );
  const [agregar, setAgregar] = useState("");

  const agregarTareas = () => {
    if (!agregar.trim()) {
      return;
    }
    const completada = { tarea: agregar, completada: false };
    const listaActualizada = [...lista, completada];
    setLista(listaActualizada);
    localStorage.setItem("tareas", JSON.stringify(listaActualizada));
    setAgregar("");
  };

  const chekCompletada = (indice: number) => {
    const copia = [...lista];
    copia[indice].completada = !copia[indice].completada;
    setLista(copia);
    localStorage.setItem("tareas", JSON.stringify(copia));
  };

  return (
    <div className="listaTareasLocal">
      <h1>Lista de Tareas con LocalStorage</h1>
      <input
        value={agregar}
        type="text"
        onChange={(e) => setAgregar(e.target.value)}
      />
      <button onClick={agregarTareas}>Agregar</button>

      <p>Tareas</p>
      <ul>
        {lista.map((item, i) => (
          <li key={i}>
            {item.tarea}
            <input
              type="checkbox"
              checked={item.completada}
              onChange={() => chekCompletada(i)}
            />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Ejercicio9;
