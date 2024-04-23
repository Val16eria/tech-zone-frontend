import {
	makeAutoObservable,
	runInAction,
	toJS
} from "mobx";

import { getAllFavourites, IBaseProduct } from "@shared/api";

class FavouritesModel {
	private _loading: boolean = false;
	private _favourites: IBaseProduct[] = [];
	private _error: string | null = null;

	get loading(): boolean {
		return this._loading;
	}

	get favourites(): IBaseProduct[] {
		return toJS(this._favourites);
	}

	get error(): string | null {
		return this._error;
	}

	constructor() {
		makeAutoObservable(this);
	}

	async getFavourites() {
		try {
			this._loading = true;
			const response = await getAllFavourites();
			runInAction(() => {
				this._favourites = response.items;
				this._loading = false;
			})
		} catch (error: unknown) {
			this._loading = false;

			runInAction(() => {
				if (typeof error === "string") {
					this._error = error;
				}
			})
		}
	}
}

export default new FavouritesModel();
