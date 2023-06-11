import React from 'react'
import Card from '../../atoms/card/card';
import Input from '../../atoms/input/input';
import { Button } from '../../atoms/button/button';



interface StepsOneProps {
    onChange?: (text: string) => void
    messageError?: string
    onNext: () => void
};
const StepsOne: React.FC<StepsOneProps> = ({ onChange, messageError, onNext }) => {
    return (
        <>
            <Card
                url='https://rickandmortyapi.com/api/character/avatar/1.jpeg'
            />
            <Input
                onChange={onChange}
                placeHolder='Buscar personaje'
                messageError={messageError}
            ></Input>
            <Button onClick={onNext}>Continuar</Button>
        </>

    );
};

export default StepsOne;