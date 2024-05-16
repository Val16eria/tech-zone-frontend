interface IError {
	detail: [
		{
			loc: [string, unknown],
			msg: string,
			type: string,
		}
	];
}

interface IBaseItems {
	id: number;
	title: string;
}

type TTypeOfNavbarItems =
	"orders"
	| "favourites"
	| "profile"
	| "cart";

type TTypeOfCatalogItems =
	"televisions"
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
	icon: string;
	title: string;
	path: string;
}

export type {
	IError,
	TTypeOfNavbarItems,
	IBaseItems,
	TTypeOfCatalogItems,
	ISectionItems
};
