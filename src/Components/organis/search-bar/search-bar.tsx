import React, { FC, useState } from 'react'
import { Button } from '../../atoms/button/button'
import Input from '../../atoms/input/input'
import './search-bar.scss'
import { getCharactersRickAndMorty } from '../../../services/rick-and-morty/rick-and-morty';
import { Cartoons } from '../../../utils/interfaces/cartoons';



export interface searchBarProps {
    onSearch: (value: string) => void;
    placeHolder?: string;
    messageError?: string;
}
const SearchBar: FC<searchBarProps> = ({ placeHolder, messageError }) => {
    const [currentValue, setCurrentValue] = useState<string>("");


    const onChangeText = (text: string) => {
        setCurrentValue(text);
        console.log(currentValue)
    };


    return (
        <div className='searchBar' >
            <div className='searchBar__container'>
                <Input
                    onChange={onChangeText}
                    placeHolder={placeHolder}
                    messageError={messageError}
                />
            </div>
            <div className='searchBar__button'>
                <Button onClick={() => { }}>Buscar</Button>
            </div>
        </div>
    )
}
export default SearchBar