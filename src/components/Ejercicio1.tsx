import { useState } from "react";

const Ejercicio1 = () => {
  const [color, setColor] = useState("white");

  const randomColor = () => {
    const r = Math.floor(Math.random() * 256);
    const g = Math.floor(Math.random() * 256);
    const b = Math.floor(Math.random() * 256);
    const a = Math.random().toFixed(2);
    setColor(`rgba(${r}, ${g}, ${b}, ${a})`);
  };

  return (
    <div
      className="colorFondo"
      style={{ backgroundColor: color, padding: "2rem" }}
    >
      <h1>Cambiador de Color de Fondo</h1>

      <div className="colorBotones">
        <button onClick={() => setColor("#0F91FC")}>Cambia a azul!</button>
        <button onClick={() => setColor("#fc0f0fff")}>Cambia a rojo!</button>
        <button onClick={() => setColor("#0ffc37ff")}>Cambia a verde!</button>
        <button onClick={randomColor}>Cambia aleatorio!</button>
      </div>
    </div>
  );
};

export default Ejercicio1;
