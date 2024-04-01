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

export type { IBaseItems, IProduct };
