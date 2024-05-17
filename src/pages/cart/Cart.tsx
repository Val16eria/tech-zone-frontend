import { FC, useEffect } from "react";
import { observer } from "mobx-react-lite";
import { Divider } from "@nextui-org/react";

import CartModel from "@features/cart/model";
import { CartProduct } from "@features/cart/ui";
import { WithAuth } from "@shared/hoc";
import {
	Empty,
	Loader,
	Section
} from "@shared/ui";

import CartIcon from "@assets/svg/cart-icon.svg";
import "./Cart.scss";

const Cart: FC = WithAuth(observer(() => {
	const { cart, loading } = CartModel;

	useEffect(() => {
		CartModel.getCart();
	}, []);

	if (loading) {
		return <Loader />;
	}

	return (
		<Section
			title="Корзина"
			isBreadcrumbs={true}
			productsCount={cart.length}
		>
			{cart.length ? (
				<div className="cart flex-row">
					<div className="flex-column">
						{cart.map((product) =>
							<div className="flex-column">
								<CartProduct key={product.id} cartProduct={product}/>
								{product.product !== cart.at(-1)?.product && <Divider className="cart__divider"/>}
							</div>
						)}
					</div>
					<p>информация о товарах</p>
				</div>
			) : (
				<Empty
					icon={CartIcon}
					title="У вас пока нет товаров в корзине"
					description="Добавьте товары в корзину"
				/>
			)}
		</Section>
	);
}));

export {Cart};
