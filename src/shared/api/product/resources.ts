import { AxiosResponse } from "axios";

import { api } from "@shared/api/apiAxios.ts";
import { IProductType } from "./types.ts";
import {IAccessories, ILaptops, IPhones, ISmartWatches, ITablets} from "@shared/api";

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

export { getProductTypeById, getProductById };
