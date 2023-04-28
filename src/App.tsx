import React, { useEffect, useState } from 'react';
import './App.css';
import { Button } from './Components/atoms/button/button';
import Card from './Components/organis/card/card';
import Image from './Components/molecules/image/image';
import { getCharactersRickAndMorty } from './services/rick-and-morty/rick-and-morty';
import { Numbers } from './Components/atoms/numbers/numbers';


function App() {
  useEffect(() => {
    getCharactersRickAndMorty()
  }
    , [])

  const objetoCartoons =
  {
    image: '',
    id: 1,
    status: '',
    species: '',
    origin: {
      name: '',
      url: '',
    },
    type: '',
    episode: [],
    location: {
      name: '',
      url: '',
    },
    url: 'https://fondosmil.com/fondo/27333.jpg'
    , created: '',
    name: '', gender: '',
  }
  /*
    const [characters, setCharacters] = useState([])
  
  
  
    const getData = async () => {
  
      const cartoons = await getCharactersRickAndMorty()
      setCharacters(cartoons.results)
      console.log(cartoons.results);
  
    }
  
    useEffect(() => {
      getData()
    }
      , [])
  
  
    console.log('personajesss', characters) */
  return (
    <div className="App">
      <Image

        cartoons={
        } />
      <Card />

      <Numbers numero={2} />
    </div>
  );
}

export default App;

