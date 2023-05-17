import React, { FC, useState } from "react";
import "./number.scss";
interface NumbersProps {
    numero: number;
}
export const Numbers: FC<NumbersProps> = ({ numero }) => {
    const [colorNumber, setColorNumber] = useState<number>(0);

    const returnNumber = [];
    for (let i = numero; i >= 1; i--) {
        returnNumber.unshift(i);
    }

    const handleOnClick = (myNumber: number) => {
        setColorNumber(myNumber);
        console.log("seleccionaste el circulo número", myNumber);
    };

    return (
        <div className="number__container">
            {returnNumber.map((num) => (
                <button
                    onClick={() => handleOnClick(num)}
                    style={{ backgroundColor: num === colorNumber ? 'blue' : 'red' }}
                    className="number__numeros"
                    key={num}
                >
                    {num}
                </button>
            ))}
        </div>
    );
};
