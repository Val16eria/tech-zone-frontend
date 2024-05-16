import Cookies from "js-cookie";

const setTypeAuth = (value: string) => {
	localStorage.setItem("email", value);
};

const getTypeAuth = () => {
	return localStorage.getItem("email");
};

const clearTyeAuth = () => {
	localStorage.removeItem("email");
}

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

const isAuth = () => {
	return !!getAccessTokenCookie() && !!getRefreshTokenCookie();
};

const logout = () => {
	localStorage.clear();
	Cookies.remove("access_token");
	Cookies.remove("refresh_token");
}

export {
	isAuth,
	setTypeAuth,
	getTypeAuth,
	setStatusAuthCode,
	isStatusAuthCode,
	clearTyeAuth,
	clearStatusAuthCode,
	setTokensCookie,
	getAccessTokenCookie,
	getRefreshTokenCookie,
	logout
};
