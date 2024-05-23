import { FC } from "react";
import { useNavigate } from "react-router-dom";
import { Image } from "@nextui-org/react";

import { LikeButton } from "@features/favourites/ui";
import { QuantityButton } from "../quantityButton";
import { DeleteButton } from "../deleteButton";
import { ICart } from "@shared/api";
import { discountedPrice } from "@shared/lib";

import DefaultImage from "@assets/svg/defaultImage.svg";
import "./CartProduct.scss";

interface ICartProduct {
	cartProduct: ICart;
}

const
	CartProduct: FC<ICartProduct> = ({ cartProduct }) => {
	const navigate = useNavigate();

	return (
		<div className="cart-product flex-row">
			<Image
				className="cart-product__img"
				src={cartProduct.product.photos?.length ? cartProduct.product.photos[0].url : DefaultImage}
				radius="none"
				alt="product photo"
			/>
			<div className="cart-product__content flex-column">
				<div className="cart-product__content_item flex-row">
					<p
						className="cart-product__item_title line-2"
						onClick={() => navigate(`/product/${cartProduct.product.id}`)
					}>
						{cartProduct.product.name}
					</p>
					<div className="cart-product__item_prices">
						{cartProduct.product.discount && <p className="cart-product__item_price">
							{`${cartProduct.product.price} ₽`}
						</p>}
						<p className="cart-product__item_discount">
							{`${discountedPrice(cartProduct.product.price, cartProduct.product.discount) || 
							cartProduct.product.price} ₽`}
						</p>
					</div>
				</div>
				<div className="cart-product__content_item flex-row">
					<QuantityButton quantity={cartProduct.quantity} id_product={cartProduct.product.id} />
					<div className="cart-product__content_actions">
						<DeleteButton id_product={cartProduct.product.id} />
						<LikeButton id_product={cartProduct.product.id} />
					</div>
				</div>
			</div>
		</div>
	);
};

export { CartProduct };
