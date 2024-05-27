import {
	toJS,
	runInAction,
	makeAutoObservable
} from "mobx";

import {
	IBaseReview,
	IReview,
	createReviewById,
	getReviewById,
	updateReviewById
} from "@shared/api";

class ReviewModel {
	private _loading: boolean = false;
	private _review: IReview | null = null;
	private _error: string | null = null;

	get loading(): boolean {
		return this._loading;
	}

	get review(): IReview | null {
		return toJS(this._review);
	}

	get error(): string | null {
		return this._error;
	}

	constructor() {
		makeAutoObservable(this);
	}

	async getReview(id: number) {
		try {
			this._loading = true;
			const response = await getReviewById(id);

			runInAction(() => {
				this._review = response;
				this._loading = false;
			});
		} catch (error: unknown) {
			this._loading = false;

			runInAction(() => {
				this._error = (error as Error).message;
			})
		}
	}

	async updateReview(dto: Partial<IBaseReview>, id: number) {
		try {
			this._loading = true;
			const response = await updateReviewById(dto, id);

			runInAction(() => {
				this._review = response;
				this._loading = false;
			});
		} catch (error: unknown) {
			this._loading = false;

			runInAction(() => {
				this._error = (error as Error).message;
			})
		}
	}

	async createReview(dto: IBaseReview, id: number) {
		try {
			this._loading = true;
			const response = await createReviewById(dto, id);

			runInAction(() => {
				this._review = response;
				this._loading = false;
			});
		} catch (error: unknown) {
			this._loading = false;

			runInAction(() => {
				this._error = (error as Error).message;
			})
		}
	}
}

export default new ReviewModel();
