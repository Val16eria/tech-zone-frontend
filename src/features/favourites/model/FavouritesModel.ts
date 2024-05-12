import {
	makeAutoObservable,
	runInAction,
	toJS
} from "mobx";

import { getAllFavourites } from "@shared/api";
import {
	addFavouriteProduct,
	deleteFavouriteProduct,
	IFavourites
} from "@shared/api/favourites";
import { AxiosError } from "axios";
import { IError } from "@shared/lib";

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

			const err = (error as AxiosError).response?.data as IError;

			runInAction(() => {
				this._error = err.detail[0].msg || String(err.detail) || "Что-то пошло не так";
			});
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

			const err = (error as AxiosError)?.response?.data as IError;

			if ((error as AxiosError)?.response?.status === 409) {
				this.deleteFavourites(id_product);
			}

			runInAction(() => {
				this._error = err.detail[0].msg || String(err.detail) || "Что-то пошло не так";
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
			const err = (error as AxiosError).response?.data as IError;
			runInAction(() => {
				this._error = err.detail[0].msg || String(err.detail) || "Что-то пошло не так";
			});
		}
	}

}

export default new FavouritesModel();
