import { AxiosResponse } from "axios";

import { api } from "../apiAxios.ts";
import { IBaseProductItems } from "./types.ts";

const getAllLaptops = async (): Promise<IBaseProductItems> => {
	const response =
		await api.get<IBaseProductItems, AxiosResponse<IBaseProductItems>>("/laptops");
	return response.data;
};

const getAllTablets = async (): Promise<IBaseProductItems> => {
	const response =
		await api.get<IBaseProductItems, AxiosResponse<IBaseProductItems>>("/tablets");
	return response.data;
};

const getAllPhones = async (): Promise<IBaseProductItems> => {
	const response =
		await api.get<IBaseProductItems, AxiosResponse<IBaseProductItems>>("/smartphones");
	return response.data;
};

const getAllSmartWatches = async (): Promise<IBaseProductItems> => {
	const response =
		await api.get<IBaseProductItems, AxiosResponse<IBaseProductItems>>("/smartwatches");
	return response.data;
};

const getAllAccessories = async (): Promise<IBaseProductItems> => {
	const response =
		await api.get<IBaseProductItems, AxiosResponse<IBaseProductItems>>("/accessories");
	return response.data;
};

export {
	getAllLaptops,
	getAllTablets,
	getAllPhones,
	getAllSmartWatches,
	getAllAccessories
};
