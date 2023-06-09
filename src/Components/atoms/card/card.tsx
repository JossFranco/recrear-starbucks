import React, { useState, useEffect, FC } from 'react'
import './card.scss'


interface CardProps {
    name?: string,
    url: string,
}
const Card: FC<CardProps> = ({ name, url }) => {




    return (
        <div className='card'>
            <h1 className='card__title'>
                {name}
            </h1>
            <img className='card__image' src={url} alt='imagen' />
        </div >
    )
}

export default Card



