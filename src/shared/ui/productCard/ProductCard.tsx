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
import {
	DefaultImage,
	Review,
	Stars
} from "@shared/ui";

import "./ProductCard.scss";

interface IProductCard {
	id: number;
	photos: IPhotos[] | null;
	name: string;
	is_active: boolean;
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
		is_active,
		price,
		discount,
		reviews_count,
		average_rating,
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
					{photos ? (
						<Image
							className="product-card__body_img"
							src={photos[0].url }
							radius="none"
							alt={name}
							onClick={redirectToProduct}
						/>
					) : <DefaultImage />}
				</div>
			</CardBody>
			<CardFooter className="product-card__content flex-column">
				<div className="product-card__content_product flex-column">
					<div className="product-card__product_outcome flex-row">
						<Stars rating={average_rating} />
						<Review reviews={reviews_count} />
					</div>
					<p className="product-card__product_title line-2" onClick={redirectToProduct}>{name}</p>
					<div className="product-card__product_details flex-row">
						<div className="product-card__details_prices">
							{!!discount && <p className="product-card__prices_price">{`${price.toLocaleString()} ₽`}</p>}
							<p className="product-card__prices_discount-price">
								{`${discountedPrice(price, discount)?.toLocaleString() || price.toLocaleString()} ₽`}
							</p>
						</div>
						<LikeButton id_product={id} />
					</div>
				</div>
				<CartButton id_product={id} is_active={is_active} />
			</CardFooter>
		</Card>
  );
});

export { ProductCard };
