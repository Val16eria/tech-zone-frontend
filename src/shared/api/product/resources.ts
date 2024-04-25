import { AxiosResponse } from "axios";

import { api } from "@shared/api/apiAxios.ts";
import { IProductType } from "./types.ts";
import {
	IAccessories,
	ILaptops,
	IPhones,
	ISmartWatches,
	ITablets
} from "../catalog";

const getProductTypeById = async (id: number): Promise<IProductType> => {
	const response =
		await api.get<IProductType, AxiosResponse<IProductType>>(`/products/type/${id}`);
	return response.data;
};

const getProductById = async (id: number): Promise<ILaptops | IPhones | ITablets | ISmartWatches | IAccessories> => {
	const response =
		await api.get<ILaptops | IPhones | ITablets | ISmartWatches | IAccessories,
			AxiosResponse<ILaptops | IPhones | ITablets | ISmartWatches | IAccessories>>(`/products/${id}`);
	return response.data;
};

const getLaptopById = async (id: number): Promise<ILaptops> => {
	const response =
		await api.get<ILaptops, AxiosResponse<ILaptops>>(`/laptops/${id}`);
	return response.data;
};

const getTabletById = async (id: number): Promise<ITablets> => {
	const response =
		await api.get<ITablets, AxiosResponse<ITablets>>(`/tablets/${id}`);
	return response.data;
};

const getPhoneById = async (id: number): Promise<IPhones> => {
	const response =
		await api.get<IPhones, AxiosResponse<IPhones>>(`smartphones/${id}`);
	return response.data;
};

const getSmartWatchById = async (id: number): Promise<ISmartWatches> => {
	const response =
		await api.get<ISmartWatches, AxiosResponse<ISmartWatches>>(`/smartwatches/${id}`);
	return response.data;
};

const getAccessoryById = async (id: number): Promise<IAccessories> => {
	const response =
		await api.get<IAccessories, AxiosResponse<IAccessories>>(`/accessories/${id}`);
	return response.data;
}

export {
	getProductTypeById,
	getProductById,
	getLaptopById,
	getTabletById,
	getPhoneById,
	getSmartWatchById,
	getAccessoryById
};
