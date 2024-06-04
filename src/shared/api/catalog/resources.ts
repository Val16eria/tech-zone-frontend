import { AxiosResponse } from "axios";

import { api } from "../apiAxios.ts";
import {
	IBaseProductItems, IBaseProductQuery,
	ILaptopsQuery, ISmartPhonesQuery, ISmartWatchesQuery,
	ITabletsQuery,
	ITelevisionsQuery
} from "./types.ts";

const getAllTelevisions = async (dto: ITelevisionsQuery): Promise<IBaseProductItems> => {
	const response =
		await api.get<IBaseProductItems, AxiosResponse<IBaseProductItems>>("/televisions", {
			params: { ...dto }
		});
	return response.data;
};

const getAllLaptops = async (dto: ILaptopsQuery): Promise<IBaseProductItems> => {
	const response =
		await api.get<IBaseProductItems, AxiosResponse<IBaseProductItems>>("/laptops", {
			params: { ...dto }
		});
	return response.data;
};

const getAllTablets = async (dto: ITabletsQuery): Promise<IBaseProductItems> => {
	const response =
		await api.get<IBaseProductItems, AxiosResponse<IBaseProductItems>>("/tablets", {
			params: { ...dto }
		});
	return response.data;
};

const getAllPhones = async (dto: ISmartPhonesQuery): Promise<IBaseProductItems> => {
	const response =
		await api.get<IBaseProductItems, AxiosResponse<IBaseProductItems>>("/smartphones", {
			params: { ...dto }
		});
	return response.data;
};

const getAllSmartWatches = async (dto: ISmartWatchesQuery): Promise<IBaseProductItems> => {
	const response =
		await api.get<IBaseProductItems, AxiosResponse<IBaseProductItems>>("/smartwatches", {
			params: { ...dto }
		});
	return response.data;
};

const getAllAccessories = async (dto: IBaseProductQuery): Promise<IBaseProductItems> => {
	const response =
		await api.get<IBaseProductItems, AxiosResponse<IBaseProductItems>>("/accessories", {
			params: { ...dto }
		});
	return response.data;
};

export {
	getAllTelevisions,
	getAllLaptops,
	getAllTablets,
	getAllPhones,
	getAllSmartWatches,
	getAllAccessories
};
