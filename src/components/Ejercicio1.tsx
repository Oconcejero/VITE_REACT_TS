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

      {/* Panel de control profesional */}
      <div className="colorBotonesGrid">
        {/* Botones con el color final integrado */}
        <button 
          onClick={() => setColor("#0F91FC")} 
          className="color-btn" 
          style={{ '--btn-color': '#0F91FC' } as any}
        >
          <span className="dot"></span>
          AZUL
        </button>
        
        <button 
          onClick={() => setColor("#fc0f0fff")} 
          className="color-btn" 
          style={{ '--btn-color': '#fc0f0fff' } as any}
        >
          <span className="dot"></span>
          ROJO
        </button>
        
        <button 
          onClick={() => setColor("#0ffc37ff")} 
          className="color-btn" 
          style={{ '--btn-color': '#0ffc37ff' } as any}
        >
          <span className="dot"></span>
          VERDE
        </button>
        
        <button 
          onClick={randomColor} 
          className="color-btn action"
        >
          <span>?</span>
          ALEATORIO
        </button>
      </div>
    </div>
  );
};

export default Ejercicio1;