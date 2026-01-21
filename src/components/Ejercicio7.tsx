import { useState } from "react";

const Ejercicio7 = () => {
  const [contador, setContador] = useState("");
  const [genContra, setContra] = useState("");
  const [error, setError] = useState("");

  const resultado = genContra;

  const generar = () => {
    const longitud = parseInt(contador);
    let nuevaContra = "";

    if (longitud >= 4) {
      const caracteres =
        "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()_+-=[]{}";
      const carAleatorio =
        caracteres[Math.floor(Math.random() * caracteres.length)];

      for (let i = 0; i < longitud; i++) {
        nuevaContra +=
          caracteres[Math.floor(Math.random() * caracteres.length)];
      }
      setContra(nuevaContra);
      setError("");
    } else {
      setContra("");
      setError("La contraseña no tiene suficientes caracteres");
    }
  };

  return (
    <div className="contra">
      <h1>Generar contraseña</h1>
      <input
        value={contador}
        type="number"
        onChange={(e) => setContador(e.target.value)}
      />

      <button onClick={() => generar()}>Generar</button>

      <div className="cuadroContra">
        <p className="error">{error}</p>
        <p className="contrasena">{resultado}</p>
      </div>
    </div>
  );
};

export default Ejercicio7;
