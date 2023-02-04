
import './button.scss'
import React,{ FC } from 'react'


export interface ButtonProps {
    children?: React.ReactNode
    color: 'primary' | 'secondary'
    size: 'small' | 'medium'
    onClick?: () => void
}


export const Button: FC<ButtonProps> = ({ onClick = () => { }, size, children }) => {
    return (
        <div>
            <button
                className={`button ${size === 'small' && 'button--small'}`}
                onClick={() => onClick()}
            >
                {children}
            </button>
        </div>
    )
}



