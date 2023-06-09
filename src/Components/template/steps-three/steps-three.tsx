import React, { FC } from 'react'
import { Personaje } from '../../../utils/interfaces/interfaces'
import { Button } from '../../atoms/button/button'
import Card from '../../atoms/card/card'


interface StepThreeProps {
    onClickLast: () => void
    onClickMessage: () => void

    inputText: string
}

const StepsThree: FC<StepThreeProps> = ({ onClickLast, onClickMessage, inputText }) => {
    console.log(inputText)
    return (
        <>
            <Card
                name={item.name}
                url={item.image}
            />

            <div className="app__buttonContainer">
                <Button onClick={onClickLast}>Regresar</Button>
                <Button color="secondary" onClick={onClickMessage}>Listo</Button>
            </div></>
    );
};
export default StepsThree;