import axios, { AxiosResponse } from "axios";

import {
	getAccessTokenCookie,
	getRefreshTokenCookie,
	setTokensCookie
} from "@shared/lib";
import { validToken } from "@shared/api/auth";

const api = axios.create({
	baseURL: `${import.meta.env.VITE_BASE_URL}`,
	headers: {
		accept: "accept: application/json",
	},
	withCredentials: true,
});

api.interceptors.request.use(
	(config) => {
		const accessToken = getAccessTokenCookie();
		if (accessToken) {
			config.headers.Authorization = `Bearer ${accessToken}`;
		}

		return config;
	},
	(err) => Promise.reject(err),
);


api.interceptors.response.use(
	(response: AxiosResponse) => response,
	async (error) => {
		const originalRequest = error.config;

		if (error.response.status === 401 && !originalRequest._retry) {
			originalRequest._retry = true;

			const refreshToken = getRefreshTokenCookie();
			const accessToken = getAccessTokenCookie();

			if (refreshToken && accessToken) {
				try {
					const response = await validToken({
						token_access: accessToken,
						token_refresh: refreshToken,
					});

					if (response && response.token_access && response.token_refresh) {
						setTokensCookie(response.token_access, response.token_refresh)
						return api(originalRequest);
					}
				} catch (refreshError) {
					console.error("Ошибка при обновлении токена:", refreshError);
				}
			}
		}
		return Promise.reject(error);
	}
);

export { api };
