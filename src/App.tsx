import React, { useEffect, useState } from 'react';
import './App.css';
import { Button } from './Components/atoms/button/button';
import { getCharactersRickAndMorty } from './Components/services/rick-and-morty/rick-and-morty';

function App() {

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


  console.log('personajesss', characters)
  return (
    <div className="App">
      <Button color='primary' isCircle onClick={() => { }}>BOTÓN</Button>
    </div>
  );
}

export default App;
