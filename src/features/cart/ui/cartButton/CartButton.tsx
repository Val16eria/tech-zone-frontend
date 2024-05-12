import { FC } from "react";
import { Button } from "@nextui-org/react";

import "./CartButton.scss";

interface ICartButton {
	is_in_cart: boolean;
}

const CartButton: FC<ICartButton> = ({ is_in_cart }) => {
	return (
		<div className="cart-button">
			{is_in_cart ? (
				<Button
					className="cart-button__active"
					color="primary"
					size="md"
					fullWidth={true}
				>
					В корзине
				</Button>
			) : (
				<Button
					color="primary"
					size="md"
					fullWidth={true}
				>
					В корзину
				</Button>
			)}
		</div>
	);
};

export { CartButton };
