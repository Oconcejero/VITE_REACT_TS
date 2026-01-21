import { useState } from "react";

const Ejercicio2 = () => {
  const [contador, contarClics] = useState(0);

  const sumarClics = () => {
    contarClics((prev) => prev + 1);
  };

  const restarClics = () => {
    contarClics((prev) => prev - 1);
  };

  const contadorNuevo = () => {
    contarClics(() => 0);
  };

  return (
    <div className="contador">
      <h1>Contador de Clics</h1>
      <p>Llevas {contador} clics</p>

      <div className="contadorBotones">
        <button onClick={() => sumarClics()}>Sumar Click</button>
        <button onClick={() => restarClics()}>Restar Click</button>
        <button onClick={() => contadorNuevo()}>Contador a 0</button>
      </div>
    </div>
  );
};

export default Ejercicio2;
