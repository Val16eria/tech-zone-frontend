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
	logout
};
