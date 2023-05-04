import React, { useState, useEffect } from 'react'
import { isTemplateMiddle } from 'typescript';
import { getCharactersRickAndMorty } from '../../../services/rick-and-morty/rick-and-morty';
import { Cartoons } from '../../../utils/interfaces/cartoons';
import './card.scss'

const Card = () => {


    const [characters, setCharacters] = useState<Cartoons[]>([])

    const getData = async () => {
        const response = await getCharactersRickAndMorty();
        setCharacters(response.results);
        console.log('respuesta', response)
    }
    useEffect(() => {
        getData();
    }, [])

    return (
        <div className='card'>
            {characters.map((item) => (
                <div className='card__container'><img className='card__image' src={item.image} alt='imagen rick and morty' />
                    <div className='card__description'>
                        <h2>{item.name}</h2>
                        <p>{`Especie ${item.species}`}</p>
                        <p>{`Estatus ${item.status}`}</p>
                        <p>{item.gender}</p>
                        <p>{`Ubicación ${item.location.name}`}</p></div>

                </div>
            ))
            }

        </div >
    )
}

export default Card
