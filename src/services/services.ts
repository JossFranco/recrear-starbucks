import axios from "axios";

export const getCharacter = async (name: string) => {
  const responseApi = await axios.get(
    `https://rickandmortyapi.com/api/character/?name=${name}`
  );
  return responseApi.data;
};
