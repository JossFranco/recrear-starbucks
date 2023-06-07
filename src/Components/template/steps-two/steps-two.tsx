import React, { FC, useEffect, useState } from 'react'
import { Button } from '../../atoms/button/button'
import Card from '../../atoms/card/card';
import { getPersonaje } from '../../../services/services';



interface SteperTwoProps {
    seHaConsumidoApiMessage: string;
    onStepLastTwo: () => void;
    oneStepNextTwo: () => void;
}


const StepsTwo: FC<SteperTwoProps> = ({ seHaConsumidoApiMessage, onStepLastTwo, oneStepNextTwo }) => {

    const [personaje, setPersonaje] = useState();

    useEffect(() => {
        getPersonaje('Rick')

            .then((personaje) => setPersonaje(personaje))

            .catch(() => {
                'Se debe consumir una API'

            })

    }, [])

    return (
        <>
            <p>{seHaConsumidoApiMessage}</p>
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