interface IOrderItems {
	ids_order_items: number[];
	payment_method: "cash" | "card";
}

interface IOrder {
	id: number;
	payment_method: string;
	date_created: string;
	status: string;
	is_paid: boolean;
}

export type { IOrderItems, IOrder };
