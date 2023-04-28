import { useState, useEffect } from "react";
import { Cartoons } from "../../../../utils/interfaces/cartoons";
import { getCharactersRickAndMorty } from "../../../../services/rick-and-morty/rick-and-morty";

const useCard = () => {
  const [characters, setCharacters] = useState<Cartoons[]>([]);

  useEffect(() => {
    getCharactersRickAndMorty().then((list) => setCharacters(list));
  }, []);

  return {
    characters,
  };
};

export default useCard;
