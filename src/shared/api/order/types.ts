import { ICartProduct } from "@shared/api";

interface ICreateOrder {
	ids_order_items: number[];
	cost: number;
	payment_method: string;
}

type TOrderStatus = "assembly" | "ready" | "got" | "not_paid";

interface IOrderPayment {
	url: string | null;
}

interface IOrderProduct {
	id: number;
	product: Omit<ICartProduct, "quantity"> & {
		id_review: number | null;
		is_deleted: boolean;
	};
	quantity: number;
}

interface IOrder {
	id: number;
	payment_method: string;
	date_created: string;
	status: TOrderStatus;
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
	IOrderPayment,
	IOrder
};
