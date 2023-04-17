
import './button.scss'
import React, { FC, ReactNode } from 'react'


export interface ButtonProps {
    children: ReactNode;
    color?: 'primary' | 'secondary';
    size?: 'small' | 'medium';
    isCircle?: boolean;
    onClick: () => void
}


export const Button: FC<ButtonProps> = ({
    color = 'primary',
    size = 'small',
    isCircle,
    children,
    onClick,
}) => {
    let buttonClass = 'button';

    return (

        <button className={buttonClass} onClick={onClick}>
            {children}
        </button>

    )
}



