import { FC } from "react";
import { useNavigate } from "react-router-dom";
import { observer } from "mobx-react-lite";
import { Button } from "@nextui-org/react";

import CartModel from "@features/cart/model";
import { isAuth } from "@shared/lib";

import "./CartButton.scss";

interface ICartButton {
	is_in_cart: boolean;
	id_product: number;
}

const CartButton: FC<ICartButton> = observer(({ is_in_cart, id_product }) => {
	const navigate = useNavigate();

	const handleCart = async () => {
		if (!isAuth()) {
			navigate("/auth");
		} else {
			if (is_in_cart) {
				navigate("/cart")
			} else {
				await CartModel.addProduct(id_product);
			}
			await CartModel.getCart();
		}
	};

	return (
		<div className="cart-button">
			<Button
				className={`${is_in_cart ? "cart-button__active" : undefined}`}
				color="primary"
				size="md"
				fullWidth={true}
				onClick={handleCart}
			>
				{is_in_cart ? "В корзине" : "В корзину"}
			</Button>
		</div>
	);
});

export { CartButton };
