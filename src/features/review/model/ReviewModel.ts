import { toJS, runInAction, makeAutoObservable } from "mobx";
import { IBaseReview, IReview, createReviewById, getReviewById, updateReviewById } from "@shared/api";

class ReviewModel {
	private _loading: boolean = false;
	private _reviews: Map<number, IReview | null> = new Map();
	private _error: string | null = null;

	get loading(): boolean {
		return this._loading;
	}

	getReview(productId: number): IReview | null {
		return toJS(this._reviews.get(productId) || null);
	}

	get error(): string | null {
		return this._error;
	}

	constructor() {
		makeAutoObservable(this);
	}

	async fetchReview(productId: number, reviewId: number | null) {
		try {
			this._loading = true;
			const response = reviewId ? await getReviewById(reviewId) : null;

			runInAction(() => {
				this._reviews.set(productId, response);
				this._loading = false;
			});
		} catch (error: unknown) {
			this._loading = false;

			runInAction(() => {
				this._error = (error as Error).message;
			});
		}
	}

	async updateReview(dto: Partial<IBaseReview>, productId: number, reviewId: number) {
		try {
			this._loading = true;
			const response = await updateReviewById(dto, reviewId);

			runInAction(() => {
				this._reviews.set(productId, response);
				this._loading = false;
			});
		} catch (error: unknown) {
			this._loading = false;

			runInAction(() => {
				this._error = (error as Error).message;
			});
		}
	}

	async createReview(dto: IBaseReview, productId: number) {
		try {
			this._loading = true;
			const response = await createReviewById(dto, productId);

			runInAction(() => {
				this._reviews.set(productId, response);
				this._loading = false;
			});
		} catch (error: unknown) {
			this._loading = false;

			runInAction(() => {
				this._error = (error as Error).message;
			});
		}
	}
}

export default new ReviewModel();
