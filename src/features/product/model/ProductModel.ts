import {
	makeAutoObservable,
	runInAction,
	toJS
} from "mobx";

import {
	ITelevisions,
	ILaptops,
	ITablets,
	IPhones,
	ISmartWatches,
	IAccessories,
	getProductTypeById,
	getTelevisionById,
	getLaptopById,
	getTabletById,
	getPhoneById,
	getSmartWatchById,
	getAccessoryById,
} from "@shared/api";
import { TProductType } from "@shared/api/product";

class ProductModel {
	private _loading: boolean = false;
	private _productType: TProductType | null = null
	private _product: ITelevisions | ILaptops | ITablets | IPhones | ISmartWatches | IAccessories | null = null;
	private _error: string | null = null;

	get loading(): boolean {
		return this._loading;
	}

	get product(): ITelevisions | ILaptops | ITablets | IPhones | ISmartWatches | IAccessories | null {
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
		let product: ITelevisions | ILaptops | ITablets | IPhones | ISmartWatches | IAccessories | null;

		try {
			this._loading = true;

			switch (this._productType) {
				case "television" :
					product = await getTelevisionById(id) as ITelevisions;
					break;
				case "laptop":
					product = await getLaptopById(id) as ILaptops;
					break;
				case "tablet":
					product = await getTabletById(id) as ITablets;
					break;
				case "smartphone":
					product = await getPhoneById(id) as IPhones;
					break;
				case "smartwatch":
					product = await getSmartWatchById(id) as ISmartWatches;
					break;
				case "accessory":
					product = await getAccessoryById(id) as IAccessories;
					break;
				default:
					product = null;
					break;
			}

			runInAction(() => {
				this._product = product;
				this._loading = false;
			});
		} catch (error: unknown) {
			runInAction(() => {
				this._loading = false;
				if (typeof error === "string") {
					this._error = error;
				}
			});
		}
	}
}

export default new ProductModel();
