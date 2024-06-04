import { AxiosResponse } from "axios";

import { api } from "../apiAxios.ts";
import {
	IOrder,
	IOrderItems,
	ICreateOrder,
	IOrderPayment
} from "./types.ts";

const createOrder = async (dto: ICreateOrder): Promise<IOrderPayment> => {
	const response =
		await api.post<IOrderPayment, AxiosResponse<IOrderPayment>>("/orders", { ...dto });
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
