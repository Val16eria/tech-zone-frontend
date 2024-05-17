import { IBaseProduct } from "../catalog";

interface IFavourites {
	product: IBaseProduct;
}

interface IFavouritesItems {
	items: IFavourites[];
}

export type { IFavouritesItems, IFavourites };
