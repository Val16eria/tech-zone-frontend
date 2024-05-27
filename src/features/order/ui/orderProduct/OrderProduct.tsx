import { FC } from "react";
import { useNavigate } from "react-router-dom";
import { Image } from "@nextui-org/react";

import { LikeButton } from "@features/favourites/ui";
import { ReviewButton } from "@features/review/ui";
import { CartButton } from "@features/cart/ui";
import { IOrderProduct, TOrderStatus } from "@shared/api";
import { DefaultImage, Price } from "@shared/ui";

import "./OrderProduct.scss";
interface IOrderCard {
	status: TOrderStatus;
	product: IOrderProduct;
}

const OrderProduct: FC<IOrderCard> = ({ status, product }) => {
	const navigate = useNavigate();

	return (
		<div className="order-product">
			<div className="order-product__img">
				{product.product.photos ? (
					<Image
						src={product.product.photos[0].url}
						radius="none"
						alt="order product"
					/>
				) : <DefaultImage />}
			</div>
			<div className="order-product__description">
				<div className="order-product__description_info flex-row">
					<p
						className="order-product__info_title line-2 order-product__info_txt"
						onClick={() => navigate(`/product/${product.product.id}`)}
					>
						{product.product.name}
					</p>
					<p className="order-product__info_quantity order-product__info_txt">
						{product.quantity} шт.
					</p>
				</div>
				<div className="order-product__description_actions flex-column">
					<Price
						price={product.product.price}
						discount={product.product.discount}
						quantity={product.quantity}
					/>
					<div className="order-product__actions_btns flex-row">
						{status !== "got" && <LikeButton id_product={product.product.id} />}
						{status !== "got" ?
							<CartButton id_product={product.product.id} /> :
							<ReviewButton id_review={product.product.id_review} id_product={product.product.id} />
						}
					</div>
				</div>
			</div>
		</div>
	);
};

export { OrderProduct };
