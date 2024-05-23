import { IBaseProduct } from "../catalog";

interface ICart {
	id: number;
	product: Omit<IBaseProduct, "reviews_count" | "average_rating">
	quantity: number;
}

interface ICartItems {
	items: ICart[];
}

interface IUpdateCart {
	id_product: number;
	quantity: number;
}

export type {
	ICart,
	ICartItems,
	IUpdateCart
};
