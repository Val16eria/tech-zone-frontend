const isAuth = () => {
	return !!localStorage.getItem("isAuth");
};

export { isAuth };
