import { ICart } from "@shared/api";

const setOrderItem = (selectedProducts: ICart[], totalDiscount: number, totalPrice: number) => {
	sessionStorage.setItem("order", JSON.stringify({
		selectedProducts,
		totalDiscount,
		totalPrice
	}));
};

const getOrderItem = () => {
	return JSON.parse(sessionStorage.getItem("order")!);
};

export { setOrderItem, getOrderItem };
