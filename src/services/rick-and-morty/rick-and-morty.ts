import axios from "axios";
import { SERVICE_URL } from "../../utils/constants/services";

export const getCharactersRickAndMorty = async () => {
  const response = await axios.get(SERVICE_URL);
  return response.data;
};
