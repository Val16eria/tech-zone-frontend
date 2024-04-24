import {
	makeAutoObservable,
	runInAction,
	toJS
} from "mobx";

import {
	ILaptops,
	ITablets,
	IPhones,
	ISmartWatches,
	IAccessories,
	getProductTypeById,
	getProductById
} from "@shared/api";
import { TProductType } from "@shared/api/product";

class ProductModel {
	private _loading: boolean = false;
	private _productType: TProductType | null = null
	private _product: ILaptops | ITablets | IPhones | ISmartWatches | IAccessories | null = null;
	private _error: string | null = null;

	get loading(): boolean {
		return this._loading;
	}

	get product(): ILaptops | ITablets | IPhones | ISmartWatches | IAccessories | null {
		return toJS(this._product);
	}

	get productType(): TProductType | null {
		return toJS(this._productType);
	}

	get error(): string | null {
		return this._error;
	}

	constructor() {
		makeAutoObservable(this);
	}

	async getProductType(id: number) {
		try {
			this._loading = true;
			const response = await getProductTypeById(id);
			runInAction(() => {
				this._productType = response.type;
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

	async getProduct(id: number) {
		try {
			this._loading = true;
			const response = await getProductById(id);

			runInAction(() => {
				this._product = response;
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

export default new ProductModel();
