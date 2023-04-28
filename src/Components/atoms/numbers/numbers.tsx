import React, { FC } from 'react'

interface NumbersProps {
    numero: number,
}
export const Numbers: FC<NumbersProps> = ({ numero, }) => {
    const myArray = [
        1, 6, 4, 3, 8, 9
    ]
    return (
        <div>{myArray.map(() => {
            return 'p'
        })}</div>
    )
}
