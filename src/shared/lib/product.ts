const discountedPrice = (price: number, percent: number) => {
	if (!percent) {
		return;
	} else {
		return Math.floor(price - ((price * percent) / 100));
	}
};

export { discountedPrice };
