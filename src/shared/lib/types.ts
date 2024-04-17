interface IBaseItems {
	id: number;
	title: string;
}

import { JSX } from "react";

type TTypeOfNavbarItems = "orders"
	| "favourites"
	| "profile"
	| "cart";

type TTypeOfCatalogItems = "televisions"
	| "laptops"
	| "tablets"
	| "phones"
	| "smart_watches"
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
	TTypeOfCatalogItems,
	ISectionItems
};
