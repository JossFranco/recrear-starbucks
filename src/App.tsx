import "./App.scss";
import Card from "./Components/organis/card/card";
import { Stepper } from "./Components/atoms/Steps/Steps";
import React, { useState } from "react";
import { Button } from "./Components/atoms/button/button";
import Input from "./Components/atoms/input/input";

const App = () => {
  const [posicionActual, setPosicionActual] = useState<number>(1);
  const [inputText, setInputText] = useState<string>('');
  const [seHaConsumido, setSeHaConsumido] = useState<Object>({});


  const nextStep = () => {
    setPosicionActual(posicionActual + 1)
  }

  const lastStep = () => {
    setPosicionActual(posicionActual - 1)
  }
  const messageExecute = () => {
    alert("✅¡Terminaste la tarea con éxito!");
  }

  const captureText = (text: string) => {
    setInputText(text)
  }



  return (
    <div className="app__container">
      <Stepper stepNumber={3} currentStep={posicionActual} />

      {posicionActual === 1 && (
        <>
          <Card
            nombre="IMAGEN 1"
            url="https://rickandmortyapi.com/api/character/avatar/1.jpeg"
          />
          <Input
            onChange={captureText}
            messageError={inputText === '' ? 'Debes ingresar un texto' : ''}
          ></Input>
          <Button onClick={nextStep}>Continuar</Button>
        </>
      )}
      {posicionActual === 2 && (
        <>
          {seHaConsumido === undefined ? <p>Se debe consumir una API</p> : <p>Se ha consumido una API</p>}
          <Card
            nombre="IMAGEN2"
            url="https://rickandmortyapi.com/api/character/avatar/2.jpeg"
          />
          <div className="app__buttonContainer">
            <Button onClick={lastStep}>Regresar</Button>
            <Button color="secondary" onClick={nextStep}>Continuar</Button>

          </div>

        </>
      )}
      {posicionActual === 3 && (
        <>
          <Card
            nombre="IMAGEN3"
            url="https://rickandmortyapi.com/api/character/avatar/3.jpeg"
          />
          <p className="app__text">{inputText}</p>

          <div className="app__buttonContainer">
            <Button onClick={lastStep}>Regresar</Button>
            <Button color="secondary" onClick={messageExecute}>Listo</Button>
          </div>
        </>
      )}

    </div>
  );
};

export default App;
