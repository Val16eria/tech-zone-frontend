import { FC } from "react";
import { Image } from "@nextui-org/react";

import { ICart } from "@shared/api";
import { LikeButton } from "@features/favourites/ui";

import "./CartProduct.scss";
interface ICartProduct {
	cartProduct: ICart;
}

const CartProduct: FC<ICartProduct> = ({ cartProduct }) => {
	return (
		<div className="cart-product flex-row">
			<Image
				src={cartProduct.product.photos[0].url}
				width={140}
				height={140}
				alt="product photo"
			/>
			<div className="cart-product__content flex-column">
				<div className="cart-product__content_item flex-row">
					<p className="cart-product__item_title">{cartProduct.product.name}</p>
					<p className="cart-product__item_price">{cartProduct.product.price} ₽</p>
				</div>
				<div className="cart-product__content_item flex-row">
					<p>+ -</p>
					<LikeButton product_id={cartProduct.product.id} is_favourite={cartProduct.product.is_favourite}/>
				</div>
			</div>
		</div>
	);
};

export {CartProduct};
