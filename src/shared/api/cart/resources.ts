import { AxiosResponse } from "axios";

import { api } from "../apiAxios.ts";
import { ICartItems, IUpdateCart } from "./types.ts";

const getAllCart = async (): Promise<ICartItems> => {
	const response =
		await api.get<ICartItems, AxiosResponse<ICartItems>>("/cart");
	return response.data;
};

const addProductInCart = async (dto: { id_product: number }): Promise<IUpdateCart> => {
	const response =
		await api.post<IUpdateCart, AxiosResponse<IUpdateCart>>("/cart", {...dto});
	return response.data;
};

const deleteProductInCart = async (id: number): Promise<string> => {
	const response =
		await api.delete(`/cart/${id}`);
	return response.data;
};

const updateProductCart = async (dto: { quantity: number }, id: number): Promise<IUpdateCart> => {
	const response =
		await api.patch<IUpdateCart, AxiosResponse<IUpdateCart>>(`/cart/${id}`, {...dto});
	return response.data;
};

export {
	getAllCart,
	addProductInCart,
	deleteProductInCart,
	updateProductCart
};
