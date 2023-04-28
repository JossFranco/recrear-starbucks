import { FC } from "react";
import { Cartoons } from '../../../utils/interfaces/cartoons';
import { Button } from "../../atoms/button/button";
import './image.scss'
import useImage from './use-image/use-image';



interface ImageProps {
    cartoons: Cartoons;
}

export const Image: FC<ImageProps> = ({ cartoons }) => {
    const { handleOnClick, isVisible } = useImage();
    console.log('es visible', isVisible)
    return (
        <div className="imagen" >
            <img className="card__imagen" src={cartoons.url} alt='imagen' />
            <Button isCircle onClick={handleOnClick} >aceptar</Button>
        </div>

    );
};


export default Image;

