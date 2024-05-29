import {
	makeAutoObservable,
	runInAction,
	toJS
} from "mobx";

import {
	getUser,
	updateUser,
	IUpdateUserFields,
	IUser, deleteUser, deletePhotoUser
} from "@shared/api";

class PersonalDataModel {
	private _loading: boolean = false;
	private _user: IUser | null = null;
	private _error: string | null = null;

	get loading(): boolean {
		return this._loading;
	}

	get user(): IUser | null {
		return toJS(this._user);
	}

	get error(): string | null {
		return this._error;
	}

	constructor() {
		makeAutoObservable(this);
	}

	async getPersonalData() {
		try {
			this._loading = true;
			const response = await getUser();

			runInAction(() => {
				this._user = response;
				this._loading = false;
			});
		} catch (error: unknown) {
			this._loading = false;

			runInAction(() => {
				this._error = (error as Error).message;
			});
		}
	}

	async updatePersonalData(dto: IUpdateUserFields) {
		try {
			this._loading = true;
			const response = await updateUser(dto);

			runInAction(() => {
				this._user = response;
				this._loading = false;
			});

		} catch (error: unknown) {
			this._loading = false;

			runInAction(() => {
				this._error = (error as Error).message;
			});
		}
	}

	async deletePersonalData() {
		try {
			this._loading = true;
			await deleteUser();

			runInAction(() => {
				this._user = null;
				this._loading = false;
			});
		} catch (error: unknown) {
			this._loading = false;

			runInAction(() => {
				this._error = (error as Error).message;
			});
		}
	}

	async deletePhoto() {
		try {
			this._loading = true;
			await deletePhotoUser();

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
}

export default new PersonalDataModel();
