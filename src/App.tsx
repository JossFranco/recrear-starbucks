import "./App.scss";
import { Stepper } from "./Components/atoms/steps/Steps";
import React, { useState } from "react";
import StepsOne from './Components/template/steps-one/steps-one';
import StepsTwo from "./Components/template/steps-two/steps-two";
import StepsThree from "./Components/template/steps-three/steps-three";
import { Character } from "./utils/interfaces/interfaces";


const App = () => {
  const [posicionActual, setPosicionActual] = useState<number>(1);
  const [nameCharacter, setNameCharacter] = useState<string>('');
  const [character, setCharacter] = useState<Character | null>(null);


  const nextStep = () => {
    setPosicionActual(posicionActual + 1)
  }

  const lastStep = () => {
    setPosicionActual(posicionActual - 1)
  }
  const messageExecute = () => {
    alert("✅¡Terminaste la tarea con éxito!");
  }

  const captureNameCharacter = (text: string) => {
    setNameCharacter(text)
  }
  const captureCharacter = (character: Character) => {
    setCharacter(character)
  }
  return (
    <div className="app__container">
      <Stepper stepNumber={3} currentStep={posicionActual} />

      {posicionActual === 1 && (
        <StepsOne
          onChange={captureNameCharacter}
          messageError={nameCharacter === '' ? 'Debes ingresar un texto' : ''}
          onNext={nextStep}
        />
      )
      }
      {
        posicionActual === 2 && (
          <StepsTwo
            setCharacter={setCharacter}
            inputText={nameCharacter}
            captureCharacter={captureCharacter}
            character={character}
            onStepLastTwo={lastStep}
            oneStepNextTwo={nextStep} />
        )
      }
      {
        posicionActual === 3 && (
          <StepsThree
            character={character}
            inputText={nameCharacter}
            onClickLast={lastStep}
            onClickMessage={messageExecute}
          />
        )
      }

    </div >
  );
};

export default App;
