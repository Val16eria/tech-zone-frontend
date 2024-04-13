const isAuth = () => {
	return !!localStorage.getItem("isAuth");
};

const logout = () => {
	localStorage.clear();
}

export { isAuth, logout };
