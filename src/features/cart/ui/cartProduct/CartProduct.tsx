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
	const redirectToProduct = () => {
		navigate(`/product/${cartProduct.product.id}`);
	};

	return (
		<div className="cart-product flex-row">
			<div className="cart-product__img" onClick={redirectToProduct}>
				{cartProduct.product.photos ? (
					<Image
						className="cart-product__img"
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
						onClick={redirectToProduct}>
						{cartProduct.product.name}
					</p>
					<Price
						price={cartProduct.product.price}
						discount={cartProduct.product.discount}
						quantity={cartProduct.quantity}
					/>
				</div>
				<div className="cart-product__content_item flex-row">
					{
						cartProduct.product.is_active ?
							<QuantityButton
								quantity_product={cartProduct.product.quantity}
								quantity={cartProduct.quantity}
								id_product={cartProduct.product.id}
							/> :
							<p className="cart-product__content_inactive">Товара нет в наличии</p>
					}
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
