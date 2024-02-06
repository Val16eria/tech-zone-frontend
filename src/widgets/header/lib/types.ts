import { JSX } from 'react';

type TTypeOfNavbarItems = 'orders'
	| 'favourites'
	| 'profile'
	| 'cart';

type TTypeOfCatalogItems = 'television'
	| 'laptop'
	| 'tablet'
	| 'phone'
	| 'smart_watch'
	| 'accessories';

interface ISectionTypes {
	type: TTypeOfNavbarItems | TTypeOfCatalogItems;
}

interface ISectionItems extends ISectionTypes {
	id: number;
	icon: JSX.Element;
	title: string;
	path: string;
}

export type { ISectionItems };
