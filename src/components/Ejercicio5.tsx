import { useState } from "react";
import "../App.css";

const Ejercicio5 = () => {
  const [display, setDisplay] = useState("");

  const botones = [1, 2, 3, 4, 5, 6, 7, 8, 9, " ", 0, " "];
  const operadores = ["+", "-", "/", "*"];
  const resultado = "=";

  return (
    <div className="calculadora">
      <h1>Calculadora</h1>

      <div className="numeros">
        {" "}
        {botones.map((item, index) =>
          item === " " ? (
            <div key={index} className="vacio"></div>
          ) : (
            <button key={index} onClick={() => setDisplay(display + item)}>
              {" "}
              {item}{" "}
            </button>
          )
        )}{" "}
      </div>
      <div className="operadores">
        {operadores.map((operador) => (
          <button onClick={() => setDisplay(display + " " + operador + " ")}>
            {operador}
          </button>
        ))}
      </div>
      <div className="operacion">
        <button
          onClick={() => {
            try {
              setDisplay(String(eval(display)));
            } catch {
              setDisplay("Error");
            }
          }}
        >
          {resultado}
        </button>
        <button onClick={() => setDisplay("")}>C</button>
      </div>
      <div className="resultado">{display}</div>
    </div>
  );
};

export default Ejercicio5;
