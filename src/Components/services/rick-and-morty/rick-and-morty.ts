import axios from "axios";

export const getCharactersRickAndMorty = async () => {
  const response = await axios.get("https://rickandmortyapi.com/api/character");
  return response.data;
};
