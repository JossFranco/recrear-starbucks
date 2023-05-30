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

    //'#ff6961'

    return (
        <div className="steps__container">
            {returnNumber.map((num) => (
                <button
                    style={{ backgroundColor: num === currentStep ? '#84b6f4' : num < currentStep ? "green" : '#bcbabe' }}
                    className="steps__numeros"
                    key={num}
                >
                    {num}
                </button>
            ))}
        </div>
    );
};
