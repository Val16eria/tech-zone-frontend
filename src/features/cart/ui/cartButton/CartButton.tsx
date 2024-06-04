import { FC } from "react";
import { useNavigate } from "react-router-dom";
import { observer } from "mobx-react-lite";
import { Button } from "@nextui-org/react";

import CartModel from "@features/cart/model";
import { isAuth } from "@shared/lib";

import "./CartButton.scss";

interface ICartButton {
	id_product: number;
	is_active: boolean;
	is_deleted?: boolean;
}

const CartButton: FC<ICartButton> = observer((
	{
		id_product,
		is_active ,
		is_deleted
	}) => {
	const navigate = useNavigate();
	const isInCart = CartModel.cart.some(item => item.product.id === id_product);

	const handleCart = async () => {
		if (!isAuth()) {
			navigate("/auth");
		} else {
			if (isInCart) {
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
				className={`${!is_active || is_deleted ? "cart-button__inactive" : isInCart ? "cart-button__active" : undefined}`}
				color="primary"
				size="md"
				fullWidth={true}
				onClick={handleCart}
				isDisabled={!is_active}
			>
				{is_deleted ? "Продажи прекращены" : !is_active ? "Нет в наличии" : isInCart ? "В корзине" : "В корзину"}
			</Button>
		</div>
	);
});

export { CartButton };
