import { AxiosError } from "axios";
import {
	makeAutoObservable,
	runInAction,
	toJS
} from "mobx";

import {
	getAllCart,
	addProductInCart,
	deleteProductInCart,
	updateProductCart,
	ICart
} from "@shared/api";
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

	async addProduct(id: number) {
		try {
			this._loading = true;
			await addProductInCart({ id_product: id });

			runInAction(() => {
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

	async deleteProduct(id: number) {
		try {
			this._loading = true;
			await deleteProductInCart(id);

			runInAction(() => {
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

	async updateCart(quantity: number, id_product: number) {
		try {
			this._loading = true;
			await updateProductCart({ quantity }, id_product);

			runInAction(() => {
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
