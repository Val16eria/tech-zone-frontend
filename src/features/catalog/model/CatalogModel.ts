import {
	makeAutoObservable,
	runInAction,
	toJS
} from "mobx";

import {
	getAllLaptops,
	getAllTablets,
	getAllPhones,
	getAllSmartWatches,
	getAllAccessories,
	IBaseProduct
} from "@shared/api";
import {getAllTelevisions} from "@shared/api/catalog";

class CatalogModel {
	private _loading: boolean = false;
	private _televisions: IBaseProduct[] = [];
	private _laptops: IBaseProduct[] = [];
	private _tablets: IBaseProduct[] = [];
	private _phones: IBaseProduct[] = [];
	private _smartWatches: IBaseProduct[] = [];
	private _accessories: IBaseProduct[] = [];
	private _error: string | null = null;

	get loading(): boolean {
		return this._loading;
	}

	get televisions(): IBaseProduct[] {
		return toJS(this._televisions);
	}

	get laptops(): IBaseProduct[] {
		return toJS(this._laptops);
	}

	get phones(): IBaseProduct[] {
		return toJS(this._phones);
	}

	get tablets(): IBaseProduct[] {
		return toJS(this._tablets);
	}

	get smartWatches(): IBaseProduct[] {
		return toJS(this._smartWatches);
	}

	get accessories(): IBaseProduct[] {
		return toJS(this._accessories);
	}

	get error(): string | null {
		return this._error;
	}

	constructor() {
		makeAutoObservable(this);
	}

	async getTelevisions() {
		try {
			this._loading = true;
			const response = await getAllTelevisions();
			runInAction(() => {
				this._televisions = response.items;
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

	async getLaptops() {
		try {
			this._loading = true;
			const response = await getAllLaptops();
			runInAction(() => {
				this._laptops = response.items;
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

	async getTablets() {
		try {
			this._loading = true;
			const response = await getAllTablets();
			runInAction(() => {
				this._tablets = response.items;
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

	async getPhones() {
		try {
			this._loading = true;
			const response = await getAllPhones();
			runInAction(() => {
				this._phones = response.items;
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

	async getSmartWatches() {
		try {
			this._loading = true;
			const response = await getAllSmartWatches();
			runInAction(() => {
				this._smartWatches = response.items;
				this._loading = false;
				this._error = null;
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

	async getAccessories() {
		try {
			this._loading = true;
			const response = await getAllAccessories();
			runInAction(() => {
				this._accessories = response.items;
				this._loading = false;
				this._error = null;
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

	async updateProducts() {
		try {
			this._loading = true;
			const laptopsPromise = this.getLaptops();
			const tabletsPromise = this.getTablets();
			const phonesPromise = this.getPhones();
			const smartWatchesPromise = this.getSmartWatches();
			const accessoriesPromise = this.getAccessories();

			await Promise.all([
				laptopsPromise,
				tabletsPromise,
				phonesPromise,
				smartWatchesPromise,
				accessoriesPromise
			]);

			runInAction(() => {
				this._loading = false;
				this._error = null;
			});
		} catch (error: unknown) {
			this._loading = false;
			runInAction(() => {
				if (typeof error === "string") {
					this._error = error;
				}
			});
		}
	}
}

export default new CatalogModel();
