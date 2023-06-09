import React, { FC, useEffect, useState } from 'react'
import { Button } from '../../atoms/button/button'
import Card from '../../atoms/card/card';
import { getPersonaje } from '../../../services/services';



interface SteperTwoProps {
    seHaConsumidoApiMessage: Object | null;
    flagConsumoApiMessage: (personaje: Object) => void;
    onStepLastTwo: () => void;
    oneStepNextTwo: () => void;
    inputText: string;
    setPersonaje: Object;
}


const StepsTwo: FC<SteperTwoProps> = ({ flagConsumoApiMessage, seHaConsumidoApiMessage, onStepLastTwo, oneStepNextTwo, inputText, setPersonaje }) => {



    useEffect(() => {
        if (seHaConsumidoApiMessage === null) {
            getPersonaje(inputText).then((personaje) => {
                console.log(personaje);

                flagConsumoApiMessage(personaje);
            });

        }

    }, [])

    return (
        <>
            <p>{seHaConsumidoApiMessage === null ? `Buscando a  ${inputText}` : `Hemos encontrado a ${inputText}`}</p>
            <Card
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