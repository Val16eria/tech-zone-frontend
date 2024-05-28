import { FC } from "react";
import { useNavigate } from "react-router-dom";
import { Image } from "@nextui-org/react";

import { LikeButton } from "@features/favourites/ui";
import { QuantityButton } from "../quantityButton";
import { DeleteButton } from "../deleteButton";
import { ICart } from "@shared/api";
import { DefaultImage, Price } from "@shared/ui";

import "./CartProduct.scss";

interface ICartProduct {
	cartProduct: ICart;
}

const CartProduct: FC<ICartProduct> = ({ cartProduct }) => {
	const navigate = useNavigate();
	return (
		<div className="cart-product flex-row">
			<div className="cart-product__img">
				{cartProduct.product.photos ? (
					<Image
						src={cartProduct.product.photos[0].url}
						radius="none"
						alt="product photo"
					/>
				) : <DefaultImage />}
			</div>
			<div className="cart-product__content flex-column">
				<div className="cart-product__content_item flex-row">
					<p
						className="cart-product__item_title line-2"
						onClick={() => navigate(`/product/${cartProduct.product.id}`)
					}>
						{cartProduct.product.name}
					</p>
					<Price
						price={cartProduct.product.price}
						discount={cartProduct.product.discount}
						quantity={cartProduct.quantity}
					/>
				</div>
				<div className="cart-product__content_item flex-row">
					<QuantityButton
						quantity_product={cartProduct.product.quantity}
						quantity={cartProduct.quantity}
						id_product={cartProduct.product.id}
					/>
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
