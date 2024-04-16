interface IBaseItems {
	id: number;
	title: string;
}

interface IProduct {
	id: number;
	image: string;
	estimation: string;
	reviews: number;
	title: string;
	price: string;
	discounted_price: string | null;
}

import { JSX } from "react";

type TTypeOfNavbarItems = "orders"
	| "favourites"
	| "profile"
	| "cart";

type TTypeOfCatalogItems = "television"
	| "laptops"
	| "tablet"
	| "phone"
	| "smart_watch"
	| "accessories";

interface ISectionTypes {
	type: TTypeOfNavbarItems | TTypeOfCatalogItems;
}

interface ISectionItems extends ISectionTypes {
	id: number;
	icon: JSX.Element;
	title: string;
	path: string;
}

export type {
	IBaseItems,
	IProduct,
	TTypeOfCatalogItems,
	ISectionItems
};
