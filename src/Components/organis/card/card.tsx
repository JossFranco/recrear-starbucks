import React, { FC } from 'react'
import useCard from './use-card/use-card';



function Card() {
    const { characters } = useCard()


    return (

        <div className='card'>
            {/*          {characters.length > 0 &&
                characters.map((item) => (
                    <Image key={item.image} src={cartoons.image} />
                ))} */}
        </div>
    )
}
export default Card;