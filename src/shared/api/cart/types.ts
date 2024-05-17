import { IBaseProduct } from "../catalog";

interface ICart {
	id: number;
	product: Omit<IBaseProduct, "reviews_count" | "average_rating">
	quantity: number;
}

interface ICartItem {
	items: ICart[];
}

export type { ICart, ICartItem };
