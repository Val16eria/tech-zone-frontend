import {
	makeAutoObservable,
	runInAction,
	toJS
} from "mobx";

import {
	getFilterByModel,
	getAllAccessories,
	getAllLaptops,
	getAllPhones,
	getAllSmartWatches,
	getAllTablets,
	getAllTelevisions,
	getProductBySearch,
	IBaseProduct,
	IFilter,
	ISearch,
	TProductType
} from "@shared/api";
import {
	IBaseProductQuery,
	ILaptopsQuery,
	ISmartPhonesQuery, ISmartWatchesQuery,
	ITabletsQuery,
	ITelevisionsQuery
} from "@shared/api/catalog";

class CatalogModel {
	private _loading: boolean = false;
	private _products: IBaseProduct[] = [];
	private _filters: IFilter | null = null;
	private _error: string | null = null;

	get loading(): boolean {
		return this._loading;
	}

	get products(): IBaseProduct[] {
		return toJS(this._products);
	}

	get filters(): IFilter | null {
		return toJS(this._filters);
	}

	get error(): string | null {
		return this._error;
	}

	constructor() {
		makeAutoObservable(this);
	}

	async getProducts(
		type: TProductType,
		query: IBaseProductQuery | ITelevisionsQuery | ILaptopsQuery | ITabletsQuery | ISmartPhonesQuery | ISmartWatchesQuery
	) {
		let products: IBaseProduct[];

		try {
			this._loading = true;

			if (type === "television") {
				const response = await getAllTelevisions(query);
				products = response.items;
			} else if (type === "laptop") {
				const response = await getAllLaptops(query);
				products = response.items;
			} else if (type === "tablet") {
				const response = await getAllTablets(query);
				products = response.items;
			} else if (type === "smartphone") {
				const response = await getAllPhones(query);
				products = response.items;
			} else if (type === "smartwatch") {
				const response = await getAllSmartWatches(query);
				products = response.items;
			} else if (type === "accessory") {
				const response = await getAllAccessories(query);
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
		let filters: IFilter | null;

		try {
			this._loading = true;

			if (type === "television") {
				filters = await getFilterByModel(type);
			} else if (type === "laptop") {
				filters = await getFilterByModel(type);
			} else if (type === "tablet") {
				filters = await getFilterByModel(type);
			} else if (type === "smartphone") {
				filters = await getFilterByModel(type);
			} else if (type === "smartwatch") {
				filters = await getFilterByModel(type);
			} else if (type === "accessory") {
				filters = await getFilterByModel("accessory");
			} else if (!type) {
				filters = await getFilterByModel("product");
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
