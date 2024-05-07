import { FC } from "react";
import { Button } from "@nextui-org/react";

import "./CartButton.scss";

const CartButton: FC = () => {
	return (
		<div className="cart-button">
			<Button
				color="primary"
				size="md"
				fullWidth={true}
			>
				В корзину
			</Button>
		</div>
	);
};

export { CartButton };
