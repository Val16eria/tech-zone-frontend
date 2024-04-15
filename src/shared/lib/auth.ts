const setAuth = () => {
	localStorage.setItem("isAuth", "true");
};

const setTypeAuth = (type: string, value: string) => {
	localStorage.setItem(type, value);
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

const logout = () => {
	localStorage.clear();
}

export {
	setAuth,
	setTypeAuth,
	isAuth,
	setStatusAuthCode,
	isStatusAuthCode,
	clearStatusAuthCode,
	logout
};
