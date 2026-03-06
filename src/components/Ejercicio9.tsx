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

const alternarTarea = (indice: number) => {
    const nuevaLista = [...lista];
    nuevaLista[indice].completada = !nuevaLista[indice].completada;
    setLista(nuevaLista);
  };

  const eliminarTarea = (indice: number) => {
    setLista(lista.filter((_, i) => i !== indice));
  };

  return (
    <div className="listaTareasLocal">
      <h1>Lista de Tareas con LocalStorage</h1>
      <div className="input-group-tareas">
      <input
        value={agregar}
        placeholder="Nueva tarea..."
        type="text"
        onChange={(e) => setAgregar(e.target.value)}
      />
      <button className="btn-agregar-tarea" onClick={agregarTareas}>Agregar</button>
    </div>
      <p>Tareas</p>
      <ul className="tareas-ul">
        {lista.map((item, i) => (
          <li key={i} className={`tarea-item ${item.completada ? 'completada' : ''}`}>
            {item.tarea}
            <div style={{ display: 'flex', gap: '15px', alignItems: 'center' }}>
              <div 
                className={`custom-checkbox ${item.completada ? 'active' : ''}`}
                onClick={() => alternarTarea(i)}
              />
              <button 
                onClick={() => eliminarTarea(i)}
                style={{ background: 'none', border: 'none', color: '#444', cursor: 'pointer', fontSize: '1.2rem' }}
              >
                ✕
              </button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Ejercicio9;
