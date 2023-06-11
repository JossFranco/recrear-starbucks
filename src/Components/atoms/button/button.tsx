
import './button.scss'
import React, { FC, ReactNode } from 'react'


export interface ButtonProps {
    children: ReactNode;
    color?: 'primary' | 'secondary';
    onClick?: () => void;
    disabled?: boolean
}


export const Button: FC<ButtonProps> = ({
    color = 'primary',
    children,
    onClick,
    disabled
}) => {
    let buttonClass = 'button';
    if (color === 'secondary') buttonClass += " button--secondary";
    return (

        <button disabled={disabled} className={buttonClass} onClick={onClick}>
            {children}
        </button>

    )
}



