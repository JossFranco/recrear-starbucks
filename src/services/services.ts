import axios from "axios";
import { apiRest } from "../utils/interfaces/interfaces";

/* export const getService = async (): Promise<apiRest[]> => {
  try {
    const apiResponse = await axios.get<apiRest[]>(
      "https://rickandmortyapi.com/api/character/?page=19"
    );
    return apiResponse.data;
  } catch (error) {
    console.error("Error en la obtención de datos", error);
    return [];
  }
}; */

export const getPersonaje = async (name: string) => {
  const responseApi = await axios.get(
    `https://rickandmortyapi.com/api/character/?name=${name}`
  );
  return responseApi.data;
};
