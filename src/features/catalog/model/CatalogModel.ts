import {
	makeAutoObservable,
	runInAction,
	toJS
} from "mobx";

import { getAllLaptops, ILaptops } from "@shared/api";

class CatalogModel {
	private _loading: boolean = false;
	private _error: string | null = null;
	private _laptops: ILaptops[] = [];

	get loading(): boolean {
		return this._loading;
	}

	get error(): string | null {
		return this._error;
	}

	get laptops(): ILaptops[] {
		return toJS(this._laptops);
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
}

export default new CatalogModel();
