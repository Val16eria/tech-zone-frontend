interface IBaseReview {
	text: string;
	rating: number;
}

interface IReview extends IBaseReview {
	id: number;
	id_product: number;
	id_user: number;
	date_create: string;
}

export type { IReview, IBaseReview };
