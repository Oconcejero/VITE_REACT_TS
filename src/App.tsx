import Ejercicio1 from "./components/Ejercicio1";
import Card, { CardBody } from "./components/Card";
import Ejercicio2 from "./components/Ejercicio2";
import Ejercicio3 from "./components/Ejercicio3";
import Ejercicio4 from "./components/Ejercicio4";
import Ejercicio5 from "./components/Ejercicio5";
import Ejercicio6 from "./components/Ejercicio6";
import Ejercicio7 from "./components/Ejercicio7";
import Ejercicio8 from "./components/Ejercicio8";
import Ejercicio9 from "./components/Ejercicio9";
import List from "./components/List";
import { ComponentType, useState } from "react";

function App() {
  const [ejercicio, setEjercicio] = useState("Ejercicio 1");

  const list = [
    "Ejercicio 1",
    "Ejercicio 2",
    "Ejercicio 3",
    "Ejercicio 4",
    "Ejercicio 5",
    "Ejercicio 6",
    "Ejercicio 7",
    "Ejercicio 8",
    "Ejercicio 9",
  ];
  const ejercicios: Record<string, ComponentType> = {
    "Ejercicio 1": Ejercicio1,
    "Ejercicio 2": Ejercicio2,
    "Ejercicio 3": Ejercicio3,
    "Ejercicio 4": Ejercicio4,
    "Ejercicio 5": Ejercicio5,
    "Ejercicio 6": Ejercicio6,
    "Ejercicio 7": Ejercicio7,
    "Ejercicio 8": Ejercicio8,
    "Ejercicio 9": Ejercicio9,
  };

  const Componente = ejercicios[ejercicio];

  const handleSelect = (elemento: string) => {
    setEjercicio(elemento);
  };

  return (
    <Card>
      <CardBody
        tittle="Ejercicios REACT"
        text="Listado de ejercicios en REACT"
      />
      <List data={list} onSelect={handleSelect} />
      <>
        <Componente />
      </>
    </Card>
  );
}

export default App;
