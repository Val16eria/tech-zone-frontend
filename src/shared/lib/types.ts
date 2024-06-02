import { TProductType } from "@shared/api";

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
	path?: string;
}

type TTypeOfNavbarItems =
	"orders"
	| "favourites"
	| "profile"
	| "cart";

interface ISectionTypes {
	type: TTypeOfNavbarItems | TProductType;
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
	ISectionItems
};
