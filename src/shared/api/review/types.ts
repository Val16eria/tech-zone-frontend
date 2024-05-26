interface IReview {
	id: number;
	id_product: number;
	id_user: number;
	rating: number;
	text: string;
	date_create: string;
}

export type { IReview };
