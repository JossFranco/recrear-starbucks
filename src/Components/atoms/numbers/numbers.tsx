import React, { FC } from 'react'
import './number.scss'
interface NumbersProps {
    numero: number,
    onClick?: () => void,

}
export const Numbers: FC<NumbersProps> = ({ numero, onClick }) => {

    const returnNumber = [];
    for (let i = numero; i >= 1; i--) {
        returnNumber.push(i);
    }

    const handleOnClick: React.MouseEventHandler<HTMLButtonElement> = (event) => {
        // Lógica para manejar el clic del botón
    };
    return (
        <div className='number__container'>
            {
                returnNumber.map((num) => (
                    <button onClick={handleOnClick} className='number__numeros' key={num}></button>
                ))}
        </div>
    )
}
