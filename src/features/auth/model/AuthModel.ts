import { AxiosError } from "axios";

import { makeAutoObservable, runInAction } from "mobx";

import { sendAuthentication, authentication } from "@shared/api";
import { IError, setTokensCookie } from "@shared/lib";

class AuthModel {
	private _loading: boolean = false;
	private _error: string | null = null;

	get loading(): boolean {
		return this._loading;
	}

	get error(): string | null {
		return this._error;
	}

	constructor() {
		makeAutoObservable(this);
	}

	async sendAuthenticationCode(email: string) {
		try {
			this._loading = true;
			await sendAuthentication({email}).then(() => this._error = null)
				.catch(() => this._error = "Ошибка отправки кода. Попробуйте еще раз");
			runInAction(() => {
				this._loading = false;
			});
		} catch (err: unknown) {
			this._loading = false;
			const error = (err as AxiosError)?.response?.statusText as string;

			runInAction(() => {
				this._error = error;
			});
		}
	}

	async authentication(identifier: string, code: number) {
		try {
			this._loading = true;
			const response = await authentication({identifier, code});
			setTokensCookie(response.token_access, response.token_refresh);

			runInAction(() => {
				this._loading = false;
				this._error = null;
			});
		} catch (err: unknown) {
			this._loading = false;
			const error = (err as AxiosError)?.response?.data as IError;

			runInAction(() => {
				this._error = error.detail;
			});
		}
	}
}

export default new AuthModel();
