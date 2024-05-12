import { FC } from "react";
import { useNavigate } from "react-router-dom";
import { observer } from "mobx-react-lite";
import {
  Card,
  CardBody,
  CardFooter,
  Image,
} from "@nextui-org/react";

import { LikeButton } from "@features/favourites/ui";
import { CartButton } from "@features/cart/ui";

import { IPhotos } from "@shared/api";
import { discountedPrice } from "@shared/lib";
import { Review, Stars } from "@shared/ui";

import DefaultImage from "@assets/svg/defaultImage.svg";
import "./ProductCard.scss";

interface IProductCard {
	id: number;
	photos: IPhotos[];
	name: string;
	price: number;
	discount: number;
	reviews_count: number;
	average_rating: number | null;
	is_favourite: boolean;
	is_in_cart: boolean;
}

const ProductCard: FC<IProductCard> = observer((
	{
		id,
		photos,
		name,
		price,
		discount,
		reviews_count,
		average_rating,
		is_favourite,
		is_in_cart,
	}) => {
	const navigate = useNavigate();

	const redirectToProduct = () => {
		navigate(`/product/${id}`);
	};

  return (
		<Card
			className="product-card flex-column"
			isPressable={false}
			shadow="sm"
		>
			<CardBody className={`product-card__body ${!photos?.length && "product-card__body_default-img"}`}>
				<div className="product-card__body_img">
					<Image
						src={photos?.length ? photos[0].url : DefaultImage}
						radius="none"
						alt={name}
					/>
				</div>
			</CardBody>
			<CardFooter className="product-card__content flex-column">
				<div className="product-card__content_product flex-column">
					<div className="product-card__product_outcome flex-row">
						<Stars rating={average_rating} />
						<Review reviews={reviews_count} />
					</div>
					<p className="product-card__product_title" onClick={redirectToProduct}>{name}</p>
					<div className="product-card__product_details flex-row">
						<div className="product-card__details_prices">
							{!!discount && <p className="product-card__prices_price">{`${price} ₽`}</p>}
							<p className="product-card__prices_discount-price">{`${discountedPrice(price, discount) || price} ₽`}</p>
						</div>
						<LikeButton product_id={id} is_favourite={is_favourite} />
					</div>
				</div>
				<CartButton is_in_cart={is_in_cart} />
			</CardFooter>
		</Card>
  );
});

export { ProductCard };
