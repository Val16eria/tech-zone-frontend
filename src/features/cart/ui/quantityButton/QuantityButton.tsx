import { FC, useState } from "react";
import { observer } from "mobx-react-lite";

import { Button, Image } from "@nextui-org/react";

import CartModel from "@features/cart/model";

import MinusIcon from "@assets/svg/minus-icon.svg";
import DisableMinusIcon from "@assets/svg/disable-minus-icon.svg";
import PlusIcon from "@assets/svg/plus-icon.svg";
import "./QuantityButton.scss";

interface IQuantityButton {
	quantity: number;
	id_product: number;
}

const QuantityButton: FC<IQuantityButton> = observer(({ quantity, id_product }) => {
	const [count, setCount] = useState(quantity);

	const addCount = async () => {
		await CartModel.updateCart(count + 1, id_product)
			.then(() => setCount((prevState) => ++prevState));
		// await CartModel.getCart();
	};

	const subtractCount = async () => {
		if (count <= 1) {
			setCount(1);
		}

		await CartModel.updateCart(count - 1, id_product)
			.then(() => setCount((prevState) => --prevState));
		// await CartModel.getCart();
	};

	return (
		<div className="quantity-button flex-row">
			<Button
				isIconOnly
				isDisabled={count <= 1}
				className="small-action-btn"
				radius="sm"
				onClick={subtractCount}
			>
				<Image src={count <= 1 ? DisableMinusIcon : MinusIcon} alt="minus" />
			</Button>
			<p className="quantity-button__count">{count}</p>
			<Button
				isIconOnly
				className="small-action-btn"
				radius="sm"
				onClick={addCount}
			>
				<Image src={PlusIcon} alt="plus" />
			</Button>
		</div>
	);
});

export { QuantityButton };
