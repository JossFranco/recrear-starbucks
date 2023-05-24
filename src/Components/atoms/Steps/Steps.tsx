import React, { FC, useState } from "react";
import "./Steps.scss";
interface NumbersProps {
    stepNumber: number;
    currentStep: number;
}
export const Stepper: FC<NumbersProps> = ({ stepNumber, currentStep }) => {


    const returnNumber = [];
    for (let i = stepNumber; i >= 1; i--) {
        returnNumber.unshift(i);
    }



    return (
        <div className="steps__container">
            {returnNumber.map((num) => (
                <button
                    //     onClick={() => handleOnClick(num)}
                    style={{ backgroundColor: num === currentStep ? '#84b6f4' : '#ff6961' }}
                    className="steps__numeros"
                    key={num}
                >
                    {num}
                </button>
            ))}
        </div>
    );
};
