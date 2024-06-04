import { FC } from "react";
import { observer } from "mobx-react-lite";
import { Checkbox, Divider } from "@nextui-org/react";

import CartModel from "../../model";
import { CartProduct } from "../cartProduct";
import { ICart } from "@shared/api";

interface IProductItem {
	product: ICart;
}

const CartProductItem: FC<IProductItem> = observer(({ product }) => {
	const { cart } = CartModel;

	return (
		<div>
			<Checkbox
				className="cart__checkbox p-0 m-0 flex max-w-none items-center"
				isReadOnly={!product.product.is_active}
				value={product.id.toString()}
			>
				<CartProduct cartProduct={product} />
			</Checkbox>
			{product.product !== cart.at(-1)?.product && <Divider className="cart__divider" />}
		</div>
	);
});

export { CartProductItem };
