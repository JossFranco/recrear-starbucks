import "./App.scss";
import Card from "./Components/organis/card/card";
import { Stepper } from "./Components/atoms/Steps/Steps";
import React, { useState } from "react";
import { Button } from "./Components/atoms/button/button";

const App = () => {
  const [posicionActual, setPosicionActual] = useState<number>(1);

  const nextStep = () => {
    setPosicionActual(posicionActual + 1)
  }

  const lastStep = () => {
    setPosicionActual(posicionActual - 1)
  }
  const messageExecute = () => {
    alert("¡Terminaste la tarea con éxito!");
  }

  return (
    <div className="app__container">
      <Stepper stepNumber={3} currentStep={posicionActual} />

      {posicionActual === 1 && (
        <>
          <Card
            nombre="IMAGEN1"
            url="https://rickandmortyapi.com/api/character/avatar/1.jpeg"
          />
          <Button onClick={nextStep}>Continuar</Button>
        </>
      )}
      {posicionActual === 2 && (
        <>
          <Card
            nombre="IMAGEN2"
            url="https://rickandmortyapi.com/api/character/avatar/2.jpeg"
          />
          <div className="app__buttonContainer">
            <Button onClick={lastStep}>Regresar</Button>
            <Button onClick={nextStep}>Continuar</Button>

          </div>

        </>
      )}
      {posicionActual === 3 && (
        <>
          <Card
            nombre="IMAGEN3"
            url="https://rickandmortyapi.com/api/character/avatar/3.jpeg"
          />
          <div className="app__buttonContainer">
            <Button onClick={lastStep}>Regresar</Button>
            <Button onClick={messageExecute}>Listo</Button>
          </div>
        </>
      )}

    </div>
  );
};

export default App;
