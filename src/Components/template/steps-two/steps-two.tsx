import React, { FC, useEffect, useState } from 'react'
import { Button } from '../../atoms/button/button'
import Card from '../../atoms/card/card';
import { getPersonaje } from '../../../services/services';



interface SteperTwoProps {
    seHaConsumidoApiMessage: Object | null;
    flagConsumoApiMessage: (personaje: Object) => void;
    onStepLastTwo: () => void;
    oneStepNextTwo: () => void;
}


const StepsTwo: FC<SteperTwoProps> = ({ flagConsumoApiMessage, seHaConsumidoApiMessage, onStepLastTwo, oneStepNextTwo }) => {



    useEffect(() => {
        if (seHaConsumidoApiMessage === null) {
            getPersonaje('rick').then((personaje) => {
                console.log(personaje);
                flagConsumoApiMessage(personaje);
            });

        }

    }, [])

    return (
        <>
            <p>{seHaConsumidoApiMessage === null ? 'Buscando a personaje' : 'Hemos encontrado a personaje'}</p>
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