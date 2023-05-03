import React, { FC } from 'react'

interface NumbersProps {
    numero: number,
}
export const Numbers: FC<NumbersProps> = ({ numero }) => {

    const returnNumber = [];
    for (let i = numero; i >= 1; i--) {
        returnNumber.push(i);
    }

    return (
        <div>
            {
                returnNumber.map((num) => (
                    <p key={num}></p>
                ))}
        </div>
    )
}
