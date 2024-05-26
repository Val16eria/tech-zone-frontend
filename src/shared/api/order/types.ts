import { ICart } from "@shared/api";

interface ICreateOrder {
	ids_order_items: number[];
	payment_method: "cash" | "card";
}

interface IOrderInfo {
	id: number;
	payment_method: string;
	date_created: string;
	status: string;
	is_paid: boolean;
}

interface IOrder extends Omit<IOrderInfo, "is_paid">{
	order_items: ICart[];
}

interface IOrderItems {
	items: IOrder[];
}

export type {
	ICreateOrder,
	IOrderItems,
	IOrderInfo,
	IOrder
};
