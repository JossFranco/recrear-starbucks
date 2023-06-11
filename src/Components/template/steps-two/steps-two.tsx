import React, { FC, useEffect, useState } from 'react'
import { Button } from '../../atoms/button/button'
import Card from '../../atoms/card/card';
import { getCharacter } from '../../../services/services';
import { Character } from '../../../utils/interfaces/interfaces';



interface SteperTwoProps {
    character: Character | null;
    captureCharacter: (character: Character) => void;
    onStepLastTwo: () => void;
    oneStepNextTwo: () => void;
    inputText: string;
    setCharacter: Object;
}


const StepsTwo: FC<SteperTwoProps> = ({ captureCharacter, character, onStepLastTwo, oneStepNextTwo, inputText }) => {


    useEffect(() => {
        if (character === null) {
            getCharacter(inputText).then((character) => {
                console.log(character.results[0]);
                if (character.results.length > 0) {
                    captureCharacter(character.results[0]);
                }
            }).catch(() => {
                alert('No se encuentró el personaje')
            });
        }
    }, [])

    return (
        <>
            <p>{character === null ? `Buscando a  ${inputText}` : `Hemos encontrado a ${inputText}`}</p>
            <Card
                url="https://rickandmortyapi.com/api/character/avatar/2.jpeg"
            />
            <div className="app__buttonContainer">
                <Button onClick={onStepLastTwo}>Regresar</Button>
                <Button disabled={character === null} color="secondary" onClick={oneStepNextTwo}>Continuar</Button>

            </div>
        </>
    );
};
export default StepsTwo;