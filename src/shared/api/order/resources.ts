import { AxiosResponse } from "axios";

import { api } from "../apiAxios.ts";
import { IOrder, IOrderItems } from "./types.ts";

const createOrder = async (dto: IOrderItems): Promise<IOrder> => {
	const response =
		await api.post<IOrder, AxiosResponse<IOrder>>("/orders", { ...dto });
	return response.data;
};

export { createOrder };
