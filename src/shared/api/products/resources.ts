import { AxiosResponse } from "axios";

import { api } from "../apiAxios.ts";
import {
	IAccessoriesItems,
	ILaptopsItems,
	IPhonesItems,
	ISmartWatchesItems,
	ITabletsItems
} from "./types.ts";

const getAllLaptops = async (): Promise<ILaptopsItems> => {
	const response =
		await api.get<ILaptopsItems, AxiosResponse<ILaptopsItems>>("/laptops");
	return response.data;
};

const getAllTablets = async (): Promise<ITabletsItems> => {
	const response =
		await api.get<ITabletsItems, AxiosResponse<ITabletsItems>>("/tablets");
	return response.data;
};

const getAllPhones = async (): Promise<IPhonesItems> => {
	const response =
		await api.get<IPhonesItems, AxiosResponse<IPhonesItems>>("/smartphones");
	return response.data;
};

const getAllSmartWatches = async (): Promise<ISmartWatchesItems> => {
	const response =
		await api.get<ISmartWatchesItems, AxiosResponse<ISmartWatchesItems>>("/smartwatches");
	return response.data;
};

const getAllAccessories = async (): Promise<IAccessoriesItems> => {
	const response =
		await api.get<IAccessoriesItems, AxiosResponse<IAccessoriesItems>>("/accessories");
	return response.data;
};

export {
	getAllLaptops,
	getAllTablets,
	getAllPhones,
	getAllSmartWatches,
	getAllAccessories
};
