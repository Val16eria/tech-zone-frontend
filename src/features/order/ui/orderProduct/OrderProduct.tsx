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

	const redirectToProduct = () => {
		!product.product.is_deleted && navigate(`/product/${product.product.id}`);
	};

	return (
		<div className="order-product">
			<div
				className={`order-product__img ${!product.product.is_deleted && "order-product__info_active"}`}
				onClick={redirectToProduct}
			>
				{product.product.photos ? (
					<Image
						className="order-product__img"
						src={product.product.photos[0].url}
						radius="none"
						alt="order product"
					/>
				) : <DefaultImage />}
			</div>
			<div className="order-product__description">
				<div className="order-product__description_info flex-row">
					<p
						className={`order-product__info_title ${!product.product.is_deleted && "order-product__info_active"} 
						line-2 order-product__info_txt`}
						onClick={redirectToProduct}
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
						{product.product.is_deleted || status !== "got" && <LikeButton id_product={product.product.id} />}
						{status !== "got" ?
							<CartButton
								id_product={product.product.id}
								is_active={product.product.is_active}
								is_deleted={product.product.is_deleted}
							/> :
							<ReviewButton id_review={product.product.id_review} id_product={product.product.id} />
						}
					</div>
				</div>
			</div>
		</div>
	);
};

export { OrderProduct };
