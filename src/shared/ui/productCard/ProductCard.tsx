import { FC, useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  Card,
  CardBody,
  CardFooter,
  Image,
  Button,
} from "@nextui-org/react";

import { isAuth, wordFormat } from "@shared/lib";

import FavouriteIcon from "@assets/svg/favourite-icon.svg";
import FavouriteFullIcon from "@assets/svg/favourite-full-icon.svg";
import StarIcon from "@assets/svg/star.svg";
import ReviewsIcon from "@assets/svg/review.svg";
import DefaultImage from "@assets/svg/defaultImage.svg";
import "./ProductCard.scss";

interface IProductCard {
	id: number;
	images: string[];
	estimation: number;
	reviews: number;
	name: string;
	price: string;
	discounted_price: string | null;
}

const ProductCard: FC<IProductCard> = (
	{
		id,
		images,
		estimation,
		reviews,
		name,
		price,
		discounted_price
	}) => {
	const navigate = useNavigate();
  const [isLiked, setLiked] = useState(false);

	const handleLike = () => {
		if (isAuth()) {
			setLiked((prevState) => !prevState);
		} else {
			navigate("/auth");
		}
	}

  return (
		<Card
			className="product-card flex-column"
			isPressable={false}
			shadow="sm"
		>
			<CardBody className="product-card__body">
				<div className={`product-card__body_img ${!images.length && "product-card__body_default-img"}`}>
					<Image
						src={images.length ? images[0] : DefaultImage}
						radius="none"
						alt={name}
					/>
				</div>
			</CardBody>
			<CardFooter className="product-card__content flex-column">
				<div className="product-card__content_product flex-column">
					<div className="product-card__product_outcome flex-row">
						<div className="product-card__outcome_container flex-row">
							<p className="product-card__outcome_txt product-card__outcome_estimation">{estimation}</p>
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
								{reviews} {wordFormat(reviews, "отзыв", "", "а", "ов")}
							</p>
						</div>
					</div>
					<p className="product-card__product_title">{name}</p>
					<div className="product-card__product_details flex-row">
						<div className="product-card__details_prices">
							{discounted_price && <p className="product-card__prices_price">{`${price} ₽`}</p>}
							<p className="product-card__prices_discount-price">{`${discounted_price || price} ₽`}</p>
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
								{isLiked ? (
									<Image
										className="product-card__details_btn-like"
										src={FavouriteFullIcon}
										alt="favourite"
									/>
								) : (
									<Image
										className="product-card__details_btn-like"
										src={FavouriteIcon}
										alt="favourite"
									/>
								)}
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
};

export { ProductCard };
