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
	TProductType, IBaseProductMeta, getAllProducts
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
	private _hot_products: IBaseProduct[] = [];
	private _new_products: IBaseProduct[] = [];
	private _meta: IBaseProductMeta | null = null;
	private _filters: IFilter | null = null;
	private _error: string | null = null;

	get loading(): boolean {
		return this._loading;
	}

	get products(): IBaseProduct[] {
		return toJS(this._products);
	}

	get hot_products(): IBaseProduct[] {
		return toJS(this._hot_products);
	}

	get new_products(): IBaseProduct[] {
		return toJS(this._new_products);
	}

	get meta(): IBaseProductMeta | null {
		return toJS(this._meta);
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
		let meta: IBaseProductMeta | null;

		try {
			this._loading = true;
			this._error = null;

			if (type === "television") {
				const response = await getAllTelevisions(query);
				products = response.items;
				meta = response.meta;
			} else if (type === "laptop") {
				const response = await getAllLaptops(query);
				products = response.items;
				meta = response.meta;
			} else if (type === "tablet") {
				const response = await getAllTablets(query);
				products = response.items;
				meta = response.meta;
			} else if (type === "smartphone") {
				const response = await getAllPhones(query);
				products = response.items;
				meta = response.meta;
			} else if (type === "smartwatch") {
				const response = await getAllSmartWatches(query);
				products = response.items;
				meta = response.meta;
			} else if (type === "accessory") {
				const response = await getAllAccessories(query);
				products = response.items;
				meta = response.meta;
			} else {
				products = [];
				meta = null;
			}

			runInAction(() => {
				this._products = products;
				this._meta = meta;
				this._loading = false;
			});
		} catch (error: unknown) {
			this._loading = false;

			runInAction(() => {
				this._error = (error as Error).message;
			});
		}
	}

	async getHotProducts (size_page: number) {
		try {
			this._loading = true;
			this._error = null;
			const response = await getAllProducts({ size_page, sort: "popular" });

			runInAction(() => {
				this._hot_products = response.items;
				this._loading = false;
			});
		} catch (error: unknown) {
			this._loading = false;

			runInAction(() => {
				this._error = (error as Error).message;
			});
		}
	}

	async getNewProducts (size_page: number) {
		try {
			this._loading = true;
			this._error = null;
			const response = await getAllProducts({ size_page });

			runInAction(() => {
				this._new_products = response.items;
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
			this._error = null;

			const response = await getProductBySearch(dto);
			runInAction(() => {
				this._products = response.items;
				this._meta = response.meta;
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
		this._error = null;

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
