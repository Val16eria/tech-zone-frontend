import { IBaseProduct } from "../catalog";

type ICartProduct = Omit<IBaseProduct, "reviews_count" | "average_rating">;

interface ICart {
	id: number;
	product: ICartProduct;
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
	ICartProduct,
	ICart,
	ICartItems,
	IUpdateCart
};
