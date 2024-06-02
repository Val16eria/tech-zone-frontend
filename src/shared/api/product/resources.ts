import { AxiosResponse } from "axios";

import { api } from "../apiAxios.ts";
import {
	IProductType,
	ISearch,
	ISuggestions,
	TProductType,
	IFilter
} from "./types.ts";
import {
	IBaseProductItems,
	IAccessories,
	ILaptops,
	IPhones,
	ISmartWatches,
	ITablets,
	ITelevisions
} from "../catalog";

const getProductTypeById = async (id: number): Promise<IProductType> => {
	const response =
		await api.get<IProductType, AxiosResponse<IProductType>>(`/products/type/${id}`);
	return response.data;
};

const getProductBySearch = async (dto: ISearch) => {
	const response =
		await api.get<IBaseProductItems, AxiosResponse<IBaseProductItems>>("/products/search", {
			params: { ...dto },
		});
	return response.data;
};

const getSuggestions = async (query: string): Promise<ISuggestions> => {
	const response =
		await api.get<ISuggestions, AxiosResponse<ISuggestions>>("/products/suggestions", {
			params: { query },
		});
	return response.data;
};

const getFilterByModel = async (model: Omit<TProductType, "accessory"> | "product"): Promise<IFilter> => {
	const response =
		await api.get<IFilter, AxiosResponse<IFilter>>("/products/filters", {
		params: { model },
	});
	return response.data;
};

const getLaptopById = async (id: number): Promise<ILaptops> => {
	const response =
		await api.get<ILaptops, AxiosResponse<ILaptops>>(`/laptops/${id}`);
	return response.data;
};

const getTelevisionById = async (id: number): Promise<ITelevisions> => {
	const response =
		await api.get<ITelevisions, AxiosResponse<ITelevisions>>(`/televisions/${id}`);
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
	getProductBySearch,
	getSuggestions,
	getTelevisionById,
	getLaptopById,
	getTabletById,
	getPhoneById,
	getSmartWatchById,
	getAccessoryById,
	getFilterByModel
};
