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
      <header style={{textAlign: 'center'}}>
        <h1>Password Gen</h1>
        <p style={{color: '#666', fontSize: '0.8rem'}}>Define la longitud y genera</p>
      </header>
      <div className="input-group-lab">
        <input
          value={contador}
          type="number"
          onChange={(e) => setContador(e.target.value)}
        />

        <button className="btn-generar" onClick={() => generar()}>Generar</button>
      </div>
      <div className="cuadroContra">
        <p className="error">{error}</p>
        <p className="contrasena">{resultado}</p>
      </div>
    </div>
  );
};

export default Ejercicio7;
