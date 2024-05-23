import { AxiosResponse } from "axios";

import { api } from "../apiAxios.ts";
import {
	IAuthentication,
	IEmail,
	IStatus,
	ITokens
} from "./types.ts";

const sendAuthentication = async (dto: IEmail): Promise<IStatus> => {
	const response =
		await api.post<IStatus, AxiosResponse<IStatus>>("/users/send-authentication-code", {...dto});
	return response.data;
};

const authentication = async (dto: IAuthentication): Promise<ITokens> => {
	const response =
		await api.post<ITokens, AxiosResponse<ITokens>>("/users/authentication", {...dto});
	return response.data;
};

const validToken = async (dto: { token_refresh: string }): Promise<ITokens> => {
	const response =
		await api.post<ITokens, AxiosResponse<ITokens>>("/users/valid-token", {...dto});
	return response.data;
};

export {
	sendAuthentication,
	authentication,
	validToken
};
