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
	ILaptops,
	ITablets,
	IPhones,
	ISmartWatches,
	IAccessories
} from "@shared/api";

class CatalogModel {
	private _loading: boolean = false;
	private _laptops: ILaptops[] = [];
	private _tablets: ITablets[] = [];
	private _phones: IPhones[] = [];
	private _smartWatches: ISmartWatches[] = [];
	private _accessories: IAccessories[] = [];
	private _error: string | null = null;

	get loading(): boolean {
		return this._loading;
	}

	get error(): string | null {
		return this._error;
	}

	get laptops(): ILaptops[] {
		return toJS(this._laptops);
	}

	get tablets(): ITablets[] {
		return toJS(this._tablets);
	}

	get phones(): IPhones[] {
		return toJS(this._phones);
	}

	get smartWatches(): ISmartWatches[] {
		return toJS(this._smartWatches);
	}

	get accessories(): IAccessories[] {
		return toJS(this._accessories);
	}

	constructor() {
		makeAutoObservable(this);
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

export default new CatalogModel();
