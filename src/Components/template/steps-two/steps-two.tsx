import React, { FC } from 'react'
import { Button } from '../../atoms/button/button'
import Card from '../../atoms/card/card';


interface SteperTwoProps {
    seHaConsumido: string;
    onStepLastTwo: () => void;
    oneStepNextTwo: () => void;
}

const StepsTwo: FC<SteperTwoProps> = ({ seHaConsumido, onStepLastTwo, oneStepNextTwo }) => {
    return (
        <>
            <p>{seHaConsumido}</p>
            <Card
                nombre="Imagen 2"
                url="https://rickandmortyapi.com/api/character/avatar/2.jpeg"
            />
            <div className="app__buttonContainer">
                <Button onClick={onStepLastTwo}>Regresar</Button>
                <Button color="secondary" onClick={oneStepNextTwo}>Continuar</Button>

            </div>
        </>
    );
};
export default StepsTwo;