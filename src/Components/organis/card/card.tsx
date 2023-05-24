import React, { useState, useEffect, FC } from 'react'
import './card.scss'


interface CardProps {
    nombre: string,
    url: string,
}
const Card: FC<CardProps> = ({ nombre, url }) => {




    return (
        <div className='card'>
            <h2 className='card__title'>
                {nombre}
            </h2>
            <img className='card__image' src={url} alt='imagen' />
        </div >
    )
}

export default Card


