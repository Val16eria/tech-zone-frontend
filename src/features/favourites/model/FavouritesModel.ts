import {
	makeAutoObservable,
	runInAction,
	toJS
} from "mobx";

import {
	getAllFavourites,
	addFavouriteProduct,
	deleteFavouriteProduct,
	IFavourites
} from "@shared/api";

class FavouritesModel {
	private _loading: boolean = false;
	private _favourites: IFavourites[] = [];
	private _error: string | null = null;

	get loading(): boolean {
		return this._loading;
	}

	get favourites(): IFavourites[] {
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
			});
		} catch (error: unknown) {
			this._loading = false;

			runInAction(() => {
				this._error = (error as Error).message;
			})
		}
	}

	async addFavourites(id_product: number) {
		try {
			this._loading = true;
			await addFavouriteProduct({ id_product });
			runInAction(() => {
				this._loading = false;
			});
		} catch (error: unknown) {
			this._loading = false;

			runInAction(() => {
				this._error = (error as Error).message;
			})
		}
	}

	async deleteFavourites(id_product: number) {
		try {
			this._loading = true;
			await deleteFavouriteProduct(id_product);

			runInAction(() => {
				this._favourites = this._favourites.filter(item => item.product.id !== id_product);
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

export default new FavouritesModel();
