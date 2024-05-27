import { ICartProduct } from "@shared/api";

interface ICreateOrder {
	ids_order_items: number[];
	payment_method: "cash" | "card";
}

type TOrderStatus = "assembly" | "ready" | "got";

interface IOrderInfo {
	id: number;
	payment_method: string;
	date_created: string;
	status: TOrderStatus;
	is_paid: boolean;
}

interface IOrderProduct {
	id: number;
	product: ICartProduct & {
		id_review: number | null;
	};
	quantity: number;
}

interface IOrder extends Omit<IOrderInfo, "is_paid"> {
	order_items: IOrderProduct[];
}

interface IOrderItems {
	items: IOrder[];
}

export type {
	IOrderProduct,
	TOrderStatus,
	ICreateOrder,
	IOrderItems,
	IOrderInfo,
	IOrder
};
