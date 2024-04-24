import { AxiosResponse } from "axios";

import { api } from "../apiAxios.ts";

import { IBaseProductItems } from "@shared/api/products/types.ts";

const getAllFavourites = async (): Promise<IBaseProductItems> => {
	const response =
		await api.get<IBaseProductItems, AxiosResponse<IBaseProductItems>>("/favourites");
	return response.data;
};

const addFavouriteProduct = async (dto: { id_product: number }): Promise<string> => {
	const response =
		await api.post<string, AxiosResponse<string>>("/favourites", {...dto});
	return response.data;
};

const deleteFavouriteProduct = async (id_product: number): Promise<string> => {
	const response =
		await api.delete<string, AxiosResponse<string>>(`/favourites/${id_product}`);
	return response.data;
};

export {
	getAllFavourites,
	addFavouriteProduct,
	deleteFavouriteProduct
};
