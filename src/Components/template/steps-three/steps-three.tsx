import React, { FC } from 'react'
import { Character } from '../../../utils/interfaces/interfaces'
import { Button } from '../../atoms/button/button'
import Card from '../../atoms/card/card'


interface StepThreeProps {
    onClickLast: () => void;
    onClickMessage: () => void;
    character: Character | null;
    inputText: string;
}

const StepsThree: FC<StepThreeProps> = ({ onClickLast, onClickMessage, character }) => {
    return (
        <>
            <Card
                name={character?.name}
                url={character?.image ?? ''}
            />

            <div className="app__buttonContainer">
                <Button onClick={onClickLast}>Regresar</Button>
                <Button color="secondary" onClick={onClickMessage}>Listo</Button>
            </div></>
    );
};
export default StepsThree;