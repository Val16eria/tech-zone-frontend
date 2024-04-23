import { AxiosResponse } from "axios";
import { api } from "../apiAxios.ts";

import { IBaseProductItems } from "@shared/api/products/types.ts";

const getAllFavourites = async (): Promise<IBaseProductItems> => {
	const response =
		await api.get<IBaseProductItems, AxiosResponse<IBaseProductItems>>("/favourites");
	return response.data;
};

export { getAllFavourites };
