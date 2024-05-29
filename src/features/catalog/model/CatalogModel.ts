import {
	makeAutoObservable,
	runInAction,
	toJS
} from "mobx";

import {
	getAllAccessories,
	getAllLaptops,
	getAllPhones,
	getAllSmartWatches,
	getAllTablets,
	getAllTelevisions,
	getFilterByLaptop, getFilterByProduct,
	getFilterBySmartphone,
	getFilterBySmartwatch,
	getFilterByTablet,
	getFilterByTelevision,
	getProductBySearch,
	IBaseProduct,
	IFilterTelevision,
	ISearch,
	TProductType
} from "@shared/api";

class CatalogModel {
	private _loading: boolean = false;
	private _products: IBaseProduct[] = [];
	private _filters: IFilterTelevision | null = null;
	private _error: string | null = null;

	get loading(): boolean {
		return this._loading;
	}

	get products(): IBaseProduct[] {
		return toJS(this._products);
	}

	get filters(): IFilterTelevision | null {
		return toJS(this._filters);
	}

	get error(): string | null {
		return this._error;
	}

	constructor() {
		makeAutoObservable(this);
	}

	async getProducts(type: TProductType) {
		let products: IBaseProduct[];

		try {
			this._loading = true;

			if (type === "television") {
				const response = await getAllTelevisions();
				products = response.items;
			} else if (type === "laptop") {
				const response = await getAllLaptops();
				products = response.items;
			} else if (type === "tablet") {
				const response = await getAllTablets();
				products = response.items;
			} else if (type === "smartphone") {
				const response = await getAllPhones();
				products = response.items;
			} else if (type === "smartwatch") {
				const response = await getAllSmartWatches();
				products = response.items;
			} else if (type === "accessory") {
				const response = await getAllAccessories();
				products = response.items;
			} else {
				products = [];
			}

			runInAction(() => {
				this._products = products;
				this._loading = false;
			});
		} catch (error: unknown) {
			this._loading = false;

			runInAction(() => {
				this._error = (error as Error).message;
			});
		}
	}

	async getSuggestionProduct(dto: ISearch) {
		try {

			this._loading = true;
			const response = await getProductBySearch(dto);
			runInAction(() => {
				this._products = response.items;
				this._loading = false;
			})
		} catch (error: unknown) {
			this._loading = false;

			runInAction(() => {
				this._error = (error as Error).message;
			});
		}
	}

	async getFilter(type?: TProductType) {
		let filters: IFilterTelevision | null;

		try {
			this._loading = true;

			if (type === "television") {
				filters = await getFilterByTelevision(type);
			} else if (type === "laptop") {
				filters = await getFilterByLaptop(type);
			} else if (type === "tablet") {
				filters = await getFilterByTablet(type);
			} else if (type === "smartphone") {
				filters = await getFilterBySmartphone(type);
			} else if (type === "smartwatch") {
				filters = await getFilterBySmartwatch(type);
			} else if (!type || type === "accessory") {
				filters = await getFilterByProduct("product");
			} else {
				filters = null;
			}

			runInAction(() => {
				this._filters = filters;
				this._loading = false;
			});
		} catch (error: unknown) {
			runInAction(() => {
				this._error = (error as Error).message;
				this._loading = false;
			});
		}
	}
}

export default new CatalogModel();
