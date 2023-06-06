import React, { FC } from 'react'
import { Button } from '../../atoms/button/button'
import Card from '../../atoms/card/card'


interface StepThreeProps {
    onClickLast: () => void
    onClickMessage: () => void
    inputText: string
}

const StepsThree: FC<StepThreeProps> = ({ onClickLast, onClickMessage, inputText }) => {
    return (
        <>
            <Card
                nombre="Imagen 3"
                url="https://rickandmortyapi.com/api/character/avatar/3.jpeg"
            />
            <p className="app__text">{inputText}</p>
            <div className="app__buttonContainer">
                <Button onClick={onClickLast}>Regresar</Button>
                <Button color="secondary" onClick={onClickMessage}>Listo</Button>
            </div></>
    );
};
export default StepsThree;