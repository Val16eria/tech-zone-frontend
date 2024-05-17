import { FC } from "react";
import { observer } from "mobx-react-lite";
import { Button, Image } from "@nextui-org/react";

import CartModel from "@features/cart/model";

import DeleteIcon from "@assets/svg/delete-icon.svg";

interface IDeleteButton {
	id_product: number;
}

const DeleteButton: FC<IDeleteButton> = observer(({ id_product }) => {
	const handleDeleteFromCart = async () => {
		await CartModel.deleteProduct(id_product);
		await CartModel.getCart();
	};

	return (
		<Button
			isIconOnly
			disableAnimation={true}
			color="primary"
			variant="light"
			aria-label="delete"
			onClick={handleDeleteFromCart}
		>
			<Image
				className="small-action-btn"
				src={DeleteIcon}
				alt="favourite"
			/>
		</Button>
	);
});

export { DeleteButton };
