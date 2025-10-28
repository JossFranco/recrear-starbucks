/* import axios from "axios";

export const getCharacter = async (name: string) => {
  const responseApi = await axios.get(
    `https://rickandmortyapi.com/api/character/?name=${name}`
  );
  return responseApi.data;
};

export const getAllCharacters = async () => {
  const responseApi = await axios.get(
    `https://rickandmortyapi.com/api/character/`
  );
  return responseApi.data;
};
export const getCharacterById = async (id: string) => {
  const responseApi = await axios.get(
    `https://rickandmortyapi.com/api/character/${id}`
  );
  return responseApi.data;
};
export const getEpisodes = async (ids: string) => {
  const responseApi = await axios.get(
    `https://rickandmortyapi.com/api/episode/${ids}`
  );
  return responseApi.data;
};
 */
// services/api.ts
// Versión usando fetch en lugar de Axios

export const getCharacter = async (name: string) => {
  const response = await fetch(
    `https://rickandmortyapi.com/api/character/?name=${name}`
  );
  if (!response.ok) throw new Error("Error al obtener el personaje");
  const data = await response.json();
  return data;
};

export const getAllCharacters = async () => {
  const response = await fetch(`https://rickandmortyapi.com/api/character/`);
  if (!response.ok) throw new Error("Error al obtener los personajes");
  const data = await response.json();
  return data;
};

export const getCharacterById = async (id: string) => {
  const response = await fetch(
    `https://rickandmortyapi.com/api/character/${id}`
  );
  if (!response.ok) throw new Error("Error al obtener el personaje por ID");
  const data = await response.json();
  return data;
};

export const getEpisodes = async (ids: string) => {
  const response = await fetch(`https://rickandmortyapi.com/api/episode/${ids}`);
  if (!response.ok) throw new Error("Error al obtener los episodios");
  const data = await response.json();
  return data;
};
