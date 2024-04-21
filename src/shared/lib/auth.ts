import Cookies from "js-cookie";

const setAuth = () => {
	localStorage.setItem("isAuth", "true");
};

const setTypeAuth = (value: string) => {
	localStorage.setItem("email", value);
};

const getTypeAuth = () => {
	return localStorage.getItem("email");
};

const isAuth = () => {
	return !!localStorage.getItem("isAuth");
};

const setStatusAuthCode = () => {
	localStorage.setItem("sentCode", "true");
};

const isStatusAuthCode = () => {
	return !!localStorage.getItem("sentCode");
};

const clearStatusAuthCode = () => {
	localStorage.removeItem("sentCode");
};


const setTokensCookie = (token_access: string, token_refresh: string) => {
	Cookies.set("access_token", token_access, {
		expires: JSON.parse(atob(token_access.split(".")[1])).exp, path: "/"
	});

	Cookies.set("refresh_token", token_refresh, {
		expires: JSON.parse(atob(token_refresh.split(".")[1])).exp, path: "/"
	});
};

const getAccessTokenCookie = () => {
	return Cookies.get("access_token");
};

const getRefreshTokenCookie = () => {
	return Cookies.get("refresh_token");
};

const logout = () => {
	localStorage.clear();
}

export {
	setAuth,
	setTypeAuth,
	getTypeAuth,
	isAuth,
	setStatusAuthCode,
	isStatusAuthCode,
	clearStatusAuthCode,
	setTokensCookie,
	getAccessTokenCookie,
	getRefreshTokenCookie,
	logout
};
