import { JSX } from 'react';

interface ITypeOfNavbarItems {
	type: 'orders'
		| 'favourites'
		| 'profile'
		| 'cart'
}

interface INavbarItems extends ITypeOfNavbarItems{
	id: number;
	icon: JSX.Element;
	title: string;
	path: string;
}

interface ITypeOfCatalogItems {
	type: 'television'
		| 'laptop'
		| 'tablet'
		| 'phone'
		| 'smart_watch'
		| 'accessories';
}

interface ICatalogItems extends ITypeOfCatalogItems{
	id: number;
	icon: JSX.Element;
	title: string;
}

export type {
  INavbarItems,
  ICatalogItems,
  ITypeOfCatalogItems
};
