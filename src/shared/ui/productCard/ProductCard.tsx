import { FC, useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  Card as CardContainer,
  CardBody,
  CardFooter,
  Image,
  Button,
} from "@nextui-org/react";

import { isAuth, wordFormat } from "@shared/lib";

import { Favourite } from "@assets/components";
import StarIcon from "@assets/svg/start.svg";
import ReviewsIcon from "@assets/svg/review.svg";
import "./ProductCard.scss";

interface IProductCard {
	id: number;
	image: string;
	estimation: string;
	reviews: number;
	title: string;
	price: string;
	discounted_price: string | null;
}

const ProductCard: FC<IProductCard> = (
	{
		id,
		image,
		estimation,
		reviews,
		title,
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
		<CardContainer
			className="product-card flex-column"
			isPressable={false}
			shadow="sm"
		>
			<CardBody className="product-card__body">
				<div className="product-card__body_img">
					<Image src={image} alt={title} />
				</div>
			</CardBody>
			<CardFooter className="product-card__content flex-column">
				<div className="product-card__content_product flex-column">
					<div className="product-card__product_outcome flex-row">
						<div className="product-card__outcome_container flex-row">
							<p className="product-card__outcome_txt card__outcome_estimation">{estimation}</p>
							<Image
								width={13}
								height={13}
								src={StarIcon}
								alt='star'
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
					<p className="product-card__product_title">{title}</p>
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
								<Favourite className="product-card__details_btn-like" isLiked={isLiked} />
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
		</CardContainer>
  );
};

export { ProductCard };
