import { AxiosResponse } from "axios";

import { api } from "../apiAxios.ts";
import { IFavouritesItems } from "./types.ts";

const getAllFavourites = async (): Promise<IFavouritesItems> => {
	const response =
		await api.get<IFavouritesItems, AxiosResponse<IFavouritesItems>>("/favourites/");
	return response.data;
};

const addFavouriteProduct = async (dto: { id_product: number }): Promise<{id_product: number}> => {
	const response =
		await api.post<{ id_product: number }, AxiosResponse<{ id_product: number }>>("/favourites/", {...dto});
	return response.data;
};

const deleteFavouriteProduct = async (id_product: number): Promise<string> => {
	const response =
		await api.delete<string, AxiosResponse<string>>(`/favourites/${id_product}/`);
	return response.data;
};

export {
	getAllFavourites,
	addFavouriteProduct,
	deleteFavouriteProduct
};
