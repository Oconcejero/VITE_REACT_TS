import { useRef, useState } from "react";

const Ejercicio6 = () => {
  const [segundos, setSegundos] = useState(0);
  const [minutos, setMinutos] = useState(0);
  const [horas, setHoras] = useState(0);

  const segundosFormateados = String(segundos).padStart(2, "0");
  const minutosFormateados = String(minutos).padStart(2, "0");
  const horasFormateados = String(horas).padStart(2, "0");

  const contador = useRef<number | null>(null);

  const tiempo =
    horasFormateados + ":" + minutosFormateados + ":" + segundosFormateados;

  const iniciar = () => {
    if (contador.current === null) {
      contador.current = setInterval(() => {
        setSegundos((prevSegundos) => {
          if (prevSegundos === 59) {
            setMinutos((prevMinutos) => {
              if (prevMinutos === 59) {
                setHoras((prevHoras) => prevHoras + 1);
                return 0;
              }
              return prevMinutos + 1;
            });
            return 0;
          }
          return prevSegundos + 1;
        });
      }, 1000);
    }
  };

  const parar = () => {
    clearInterval(contador.current!);
    contador.current = null;
  };

  const reiniciar = () => {
    setSegundos(0);
    setMinutos(0);
    setHoras(0);
    parar();
  };

  return (
    <>
      <div className="temporizador">
        <h1>Temporizador</h1>

        <div className="container1">
          <p>{tiempo}</p>
        </div>

        <div className="container2">
          <button onClick={() => iniciar()}>Start</button>
          <button onClick={() => parar()}>Stop</button>
          <button onClick={() => reiniciar()}>Reset</button>
        </div>
      </div>
    </>
  );
};

export default Ejercicio6;
