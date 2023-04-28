import axios from "axios";
import { SERVICE_URL } from "../../utils/constants/services";
import { Cartoons } from "../../utils/interfaces/cartoons";

export const getCharactersRickAndMorty = async (): Promise<Cartoons[]> => {
  const responseGetCharactersRickAndMorty = await axios.get<Cartoons[]>(
    SERVICE_URL
  );
  console.log("data-->", responseGetCharactersRickAndMorty.data);
  return responseGetCharactersRickAndMorty.data;
};
