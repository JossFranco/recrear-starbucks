import "./App.scss";
import { Stepper } from "./Components/atoms/steps/Steps";
import React, { useState } from "react";
import StepsOne from './Components/template/steps-one/steps-one';
import StepsTwo from "./Components/template/steps-two/steps-two";
import StepsThree from "./Components/template/steps-three/steps-three";


const App = () => {
  const [posicionActual, setPosicionActual] = useState<number>(1);
  const [inputText, setInputText] = useState<string>('');
  const [seHaConsumido, setSeHaConsumido] = useState<Object | null>(null);


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
  const flagConsumoApiMessage = (personaje: Object) => {
    setSeHaConsumido(personaje)


  }
  return (
    <div className="app__container">
      <Stepper stepNumber={3} currentStep={posicionActual} />

      {posicionActual === 1 && (
        <StepsOne
          onChange={captureText}
          messageError={inputText === '' ? 'Debes ingresar un texto' : ''}
          onNext={nextStep}
        />
      )
      }
      {
        posicionActual === 2 && (
          <StepsTwo

            flagConsumoApiMessage={flagConsumoApiMessage}
            seHaConsumidoApiMessage={seHaConsumido}
            onStepLastTwo={lastStep}
            oneStepNextTwo={nextStep} />
        )
      }
      {
        posicionActual === 3 && (
          <StepsThree
            inputText={inputText}
            onClickLast={lastStep}
            onClickMessage={messageExecute}
          />
        )
      }

    </div >
  );
};

export default App;
