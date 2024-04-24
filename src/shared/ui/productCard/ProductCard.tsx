import { FC, useState } from "react";
import { useNavigate } from "react-router-dom";
import { observer } from "mobx-react-lite";
import {
  Card,
  CardBody,
  CardFooter,
  Image,
  Button,
} from "@nextui-org/react";

import FavouritesModel from "@features/favourites/model";
import { IPhotos } from "@shared/api";
import { isAuth, wordFormat } from "@shared/lib";

import FavouriteIcon from "@assets/svg/favourite-icon.svg";
import FavouriteFullIcon from "@assets/svg/favourite-full-icon.svg";
import StarIcon from "@assets/svg/star.svg";
import ReviewsIcon from "@assets/svg/review.svg";
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
		is_favourite
	}) => {
	const navigate = useNavigate();
	const [isLike, setLike] = useState(is_favourite);

	const handleLike = async () => {
		if (!isAuth()) {
			navigate("/auth");
		} else {
			if (isLike) {
				FavouritesModel.deleteFavourites(id)
					.then(() => setLike((prevState) => !prevState));
			} else {
				FavouritesModel.addFavourites(id)
					.then(() => setLike((prevState) => !prevState));
			}
		}
	}

	const discountedPrice = (percent: number) => {
		if (percent === 0) {
			return;
		} else {
			return Math.floor(price - ((price * percent) / 100));
		}
	};

	const averageRating = (rating: number | null) => {
		if (rating) {
			return `${average_rating} ${wordFormat(rating, "отзыв", "", "а", "ов")}`;
		} else {
			return "нет отзывов"
		}
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
						<div className="product-card__outcome_container flex-row">
							<p className="product-card__outcome_txt product-card__outcome_estimation">
								{reviews_count}
							</p>
							<Image
								width={13}
								height={13}
								src={StarIcon}
								alt="star"
							/>
						</div>
						<div className="product-card__outcome_container flex-row">
							<Image
								width={13}
								height={13}
								src={ReviewsIcon}
								alt="review"
							/>
							<p className="product-card__outcome_txt product-card__outcome_reviews">
								{averageRating(average_rating)}
							</p>
						</div>
					</div>
					<p className="product-card__product_title">{name}</p>
					<div className="product-card__product_details flex-row">
						<div className="product-card__details_prices">
							{!!discount && <p className="product-card__prices_price">{`${price} ₽`}</p>}
							<p className="product-card__prices_discount-price">{`${discountedPrice(discount) || price} ₽`}</p>
						</div>
						<div className="product-card__details_btn">
							<Button
								isIconOnly
								disableAnimation={true}
								color="primary"
								variant="light"
								aria-label="like"
								onClick={handleLike}
							>
								<Image
									className="product-card__details_btn-like"
									src={isLike ? FavouriteFullIcon: FavouriteIcon}
									alt="favourite"
								/>
							</Button>
						</div>
					</div>
				</div>
				<div className="product-card__content_btn">
					<Button
						color="primary"
						size="md"
						fullWidth={true}
					>
						В корзину
					</Button>
				</div>
			</CardFooter>
		</Card>
  );
});

export { ProductCard };
