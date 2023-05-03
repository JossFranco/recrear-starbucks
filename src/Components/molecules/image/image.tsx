import React from 'react'

const image = () => {
    return (
        <div>

        </div>
    )
}

export default image

/* import { FC } from "react";
import { Cartoons } from '../../../utils/interfaces/cartoons';
import { Button } from "../../atoms/button/button";
import './image.scss'
import useImage from './use-image/use-image';
import CloseIcon from '../../../asseerts/close.png'



interface ImageProps {
    cartoons: Cartoons;
    onDelete: (cartoons: Cartoons) => void;
}

export const Image: FC<ImageProps> = ({ cartoons, onDelete }) => {
    const { handleOnClick, isVisible, handleOnDelete } = useImage(
        cartoons,
        onDelete,
    );

    return (
        <div>
            <div className="imagen" >
                <img className="imagen__card" src={cartoons.image} alt='imagen' />
                <Button isCircle onClick={handleOnClick} >
                    <img
                        className="imagen__icon"
                        src={CloseIcon}
                        alt="Delete icon" />
                </Button>
            </div>
            {isVisible && (
                <div className="image__alert">
                    <div className="image__remove-message">
                        <span className="image__messge">
                            ¿Desea eliminar el personaje?
                        </span>
                    </div>
                    <div className="image__action-container">
                        <div>
                            <Button onClick={handleOnDelete}>Eliminar</Button>
                        </div>
                        <div>
                            <Button onClick={handleOnClick} >Cancelar</Button>
                        </div>
                    </div>
                </div>
            )}
        </div>


    );
};


export default Image;

 */