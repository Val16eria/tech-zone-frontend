import { AxiosResponse } from "axios";

import { api } from "../apiAxios.ts";
import {
	IOrderInfo,
	ICreateOrder,
	IOrder, IOrderItems
} from "./types.ts";

const createOrder = async (dto: ICreateOrder): Promise<IOrderInfo> => {
	const response =
		await api.post<IOrderInfo, AxiosResponse<IOrderInfo>>("/orders", { ...dto });
	return response.data;
};

const getOrderList = async (): Promise<IOrderItems> => {
	const response =
		await api.get<IOrderItems, AxiosResponse<IOrderItems>>("/orders");
	return response.data;
};

const getOrderById = async (id: number): Promise<IOrder> => {
	const response =
		await api.get<IOrder, AxiosResponse<IOrder>>(`/orders/${id}`);
	return response.data;
};

export {
	createOrder,
	getOrderList,
	getOrderById
};
