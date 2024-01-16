import { JSX } from 'react';

interface INavbarItems {
	id: number;
	icon: JSX.Element;
	type: string;
	title: string;
	path: string;
}

interface ICatalogItems {
	id: number;
	icon: JSX.Element;
	type: string;
	title: string;
}

export type { INavbarItems, ICatalogItems };
