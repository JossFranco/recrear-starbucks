import React, { FC, useState } from 'react'
import { Button } from '../../atoms/button/button'
import Input from '../../atoms/input/input'
import './search-bar.scss'



export interface searchBarProps {
    onSearch: (value: string) => void;
    placeHolder?: string;
    messageError?: string;
}
const SearchBar: FC<searchBarProps> = ({ onSearch, placeHolder, messageError }) => {
    const [search, setSearch] = useState('');

    const handleSearch = () => {
        onSearch(search);
    }

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setSearch(e.target.value);
    };
    return (
        <div className='searchBar' >
            <div className='searchBar__container'>
                <Input
                    onChange={handleChange}
                    placeHolder={placeHolder || '🔍 Buscar'}
                    messageError={messageError}
                />
            </div>
            <div className='searchBar__button'>
                <Button onClick={handleSearch}>Buscar</Button>
            </div>
        </div>
    )
}
export default SearchBar