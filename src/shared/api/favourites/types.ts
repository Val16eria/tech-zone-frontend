import { IBaseProduct } from "@shared/api";

interface IFavourites {
	product: IBaseProduct;
}

interface IFavouritesItems {
	items: IFavourites[];
}

export type { IFavouritesItems, IFavourites };
