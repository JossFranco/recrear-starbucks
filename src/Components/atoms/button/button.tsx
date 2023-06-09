
import './button.scss'
import React, { FC, ReactNode } from 'react'


export interface ButtonProps {
    children: ReactNode;
    color?: 'primary' | 'secondary';
    onClick?: () => void;
}


export const Button: FC<ButtonProps> = ({
    color = 'primary',
    children,
    onClick,
}) => {
    let buttonClass = 'button';
    if (color === 'secondary') buttonClass += " button--secondary";
    return (

        <button className={buttonClass} onClick={onClick}>
            {children}
        </button>

    )
}



