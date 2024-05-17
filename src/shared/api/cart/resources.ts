import { AxiosResponse } from "axios";

import { api } from "../apiAxios.ts";
import { ICartItem } from "./types.ts";

const getAllCart = async (): Promise<ICartItem> => {
	const response =
		await api.get<ICartItem, AxiosResponse<ICartItem>>("/cart");
	return response.data;
};

export { getAllCart };
