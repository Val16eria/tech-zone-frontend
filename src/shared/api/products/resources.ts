import { AxiosResponse } from "axios";

import { api } from "../apiAxios.ts";
import { ILaptopsItems } from "./types.ts";

const getAllLaptops = async (): Promise<ILaptopsItems> => {
	const response = await api.get<ILaptopsItems, AxiosResponse<ILaptopsItems>>("/laptops");
	return response.data;
};

export { getAllLaptops };
