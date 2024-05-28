import {
	toJS,
	runInAction,
	makeAutoObservable
} from "mobx";

import {
	createOrder,
	getOrderList,
	IOrder,
	ICreateOrder
} from "@shared/api";

class OrderModel {
	private _loading: boolean = false;
	private _orderList: IOrder[] = [];
	private _orderItem: IOrder | null = null;
	private _error: string | null = null;

	get loading(): boolean {
		return this._loading;
	}

	get orderList(): IOrder[] {
		return toJS(this._orderList);
	}

	get orderItem(): IOrder | null {
		return toJS(this._orderItem);
	}

	get error(): string | null {
		return this._error;
	}

	constructor() {
		makeAutoObservable(this);
	}

	async create(dto: ICreateOrder) {
		try {
			this._loading = true;
			await createOrder(dto);

			runInAction(() => {
				this._loading = false;
			});
		} catch (error: unknown) {
			this._loading = false;

			runInAction(() => {
				this._error = (error as Error).message;
			});
		}
	}

	async getOrders() {
		try {
			this._loading = true;
			const response = await getOrderList();

			runInAction(() => {
				this._orderList = response.items;
				this._loading = false;
			});
		} catch (error: unknown) {
			this._loading = false;

			runInAction(() => {
				this._error = (error as Error).message;
			});
		}
	}
}

export default new OrderModel();
