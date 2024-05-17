import { AxiosError } from "axios";
import {
	makeAutoObservable,
	runInAction,
	toJS
} from "mobx";

import { getAllCart, ICart } from "@shared/api";
import { IError } from "@shared/lib";

class CartModel {
	private _loading: boolean = false;
	private _cart: ICart[] = [];
	private _error: string | null = null;

	get loading(): boolean {
		return this._loading;
	}

	get cart(): ICart[] {
		return toJS(this._cart);
	}

	get error(): string | null {
		return this._error;
	}

	constructor() {
		makeAutoObservable(this);
	}

	async getCart() {
		try {
			this._loading = true;
			const response = await getAllCart();

			runInAction(() => {
				this._cart = response.items;
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

export default new CartModel();
