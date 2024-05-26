import { AxiosResponse } from "axios";

import { api } from "../apiAxios.ts";
import { IOrderInfo, ICreateOrder } from "./types.ts";

const createOrder = async (dto: ICreateOrder): Promise<IOrderInfo> => {
	const response =
		await api.post<IOrderInfo, AxiosResponse<IOrderInfo>>("/orders", { ...dto });
	return response.data;
};

export { createOrder };
