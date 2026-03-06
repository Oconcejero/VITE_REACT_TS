import { useState } from "react";

const Ejercicio3 = () => {
  const [lista, setLista] = useState<string[]>([]);

  const [valor, setValor] = useState("");

  const agregarEntrada = () => {
    if (valor) {
      setLista([...lista, valor]);
      setValor("");
    } else {
    }
  };

  const eliminarItem = (valorAEliminar: string) => {
    setLista(lista.filter((item) => item !== valorAEliminar));
  };

  return (
    <div className="listaDinamica">
      <h1>Lista Dinámica</h1>

      <input
        type="text"
        placeholder="Escribe algo aquí..."
        value={valor}
        onChange={(e) => setValor(e.target.value)}
      />

      <div className="container1">
        <button className="btn-agregar" onClick={() => agregarEntrada()}>Agregar</button>
      </div>
      <div className="lista-container">
        {lista.map((item, i) => (
          <li key={i} className="lista-item">
            {item}
            <button className="btn-delete" onClick={() => eliminarItem(item)}>❌</button>
          </li>
        ))}
      </div>
    </div>
  );
};

export default Ejercicio3;
