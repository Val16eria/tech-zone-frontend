import { ICart } from "@shared/api";

const setOrderItem = (selectedProducts: ICart[], selectedIds: string[], totalDiscount: number, totalPrice: number) => {
	sessionStorage.setItem("order", JSON.stringify({
		selectedProducts,
		selectedIds,
		totalDiscount,
		totalPrice
	}));
};

const getOrderItem = () => {
	return JSON.parse(sessionStorage.getItem("order")!);
};

const clearOrder = () => {
	sessionStorage.clear();
};

export {
	setOrderItem,
	getOrderItem,
	clearOrder
};
