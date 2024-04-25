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
	getLaptopById,
	getTabletById,
	getPhoneById,
	getSmartWatchById,
	getAccessoryById
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

			switch (this._productType) {
				case "laptop":
					await getLaptopById(id).then((product) =>
						this._product = product as ILaptops);
					break;
				case "tablet":
					await getTabletById(id).then((product) =>
						this._product = product as ITablets);
					break;
				case "smartphone":
					await getPhoneById(id).then((product) =>
						this._product = product as IPhones);
					break;
				case "smartwatch":
					getSmartWatchById(id).then((product) =>
						this._product = product as ISmartWatches);
					break;
				case "accessory":
					await getAccessoryById(id).then((product) =>
						this._product = product as IAccessories);
					break;
				default:
					this._product = null;
					break;
			}

			runInAction(() => {
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
