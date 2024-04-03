import { FC, useState } from "react";
import {
  Card as CardContainer,
  CardBody,
  CardFooter,
  Image,
  Button,
  Skeleton
} from "@nextui-org/react";

import { wordFormat } from "@shared/lib";

import { Favourite } from "@assets/components";
import StarIcon from "@assets/svg/start.svg";
import ReviewsIcon from "@assets/svg/review.svg";
import "./Card.scss";

interface ICard {
	image: string;
	estimation: string;
	reviews: number;
	title: string;
	price: string;
	discounted_price: string | null;
}

const Card: FC<ICard> = (
	{
		image,
		estimation,
		reviews,
		title,
		price,
		discounted_price
	}) => {
  const [isLoaded, setLoaded] = useState(false);
  const [isLiked, setLiked] = useState(false);

  const toggleLoad = () => {
    setLoaded(!isLoaded);
  };

  return (
		<CardContainer
			className="card flex-column"
			isPressable={false}
			shadow="sm"
		>
			<CardBody className="card__body">
				<Skeleton className="rounded-lg h-full" isLoaded={isLoaded}>
					<div className="card__body_img">
						<Image src={image} alt={title} />
					</div>
				</Skeleton>
			</CardBody>
			<CardFooter className="card__content flex-column">
				<div className="card__content_product flex-column">
					<Skeleton className="rounded-lg" isLoaded={isLoaded}>
						<div className="card__product_outcome flex-row">
							<div className="card__outcome_container flex-row">
								<p className="card__outcome_txt card__outcome_estimation">{estimation}</p>
								<Image
									width={13}
									height={13}
									src={StarIcon}
									alt='star'
								/>
							</div>
							<div className="card__outcome_container flex-row">
								<Image
									width={13}
									height={13}
									src={ReviewsIcon}
									alt="review"
								/>
								<p className="card__outcome_txt card__outcome_reviews">
									{reviews} {wordFormat(reviews, "отзыв", "", "а", "ов")}
								</p>
							</div>
						</div>
					</Skeleton>
					<Skeleton className="rounded-lg" isLoaded={isLoaded}>
						<p className="card__product_title">{title}</p>
					</Skeleton>
					<div className="card__product_details flex-row">
						<Skeleton className="w-4/5 rounded-lg" isLoaded={isLoaded}>
							<div className="card__details_prices">
								{discounted_price && <p className="card__prices_price">{`${price} ₽`}</p>}
								<p className="card__prices_discount-price">{`${discounted_price || price} ₽`}</p>
							</div>
						</Skeleton>
						<Skeleton className="w-1/5 rounded-lg" isLoaded={isLoaded}>
							<div className="card__details_btn">
								<Button
									isIconOnly
									disableAnimation={true}
									color="primary"
									variant="light"
									aria-label="like"
									onClick={() => setLiked(!isLiked)}
								>
									<Favourite className="card__details_btn-like" isLiked={isLiked} />
								</Button>
							</div>
						</Skeleton>
					</div>
				</div>
				<div className="card__content_btn">
					<Skeleton className="rounded-lg" isLoaded={isLoaded}>
						<Button
							color="primary"
							size="md"
							fullWidth={true}
							onClick={toggleLoad}
						>
							В корзину
						</Button>
					</Skeleton>
				</div>
			</CardFooter>
		</CardContainer>
  );
};

export { Card };
