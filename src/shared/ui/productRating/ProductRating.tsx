import { FC } from "react";
import { Image } from "@nextui-org/react";

import { wordFormat } from "@shared/lib";

import StarIcon from "@assets/svg/star.svg";
import ReviewsIcon from "@assets/svg/review.svg";
import "./ProductRating.scss";

interface IProductRating {
	reviews_count: number;
	average_rating: number | null;
}

const ProductRating: FC<IProductRating> = ({ reviews_count, average_rating }) => {
	const averageRating = (rating: number | null) => {
		if (rating) {
			return `${rating} ${wordFormat(rating, "отзыв", "", "а", "ов")}`;
		} else {
			return "нет отзывов"
		}
	};

	return (
		<>
			<div className="product__outcome flex-row">
				<p className="product__average_txt product__outcome_txt">
					{averageRating(average_rating)}
				</p>
				<Image
					width={13}
					height={13}
					src={StarIcon}
					alt="star"
				/>
			</div>
			<div className="product__outcome flex-row">
				<Image
					width={13}
					height={13}
					src={ReviewsIcon}
					alt="review"
				/>
				<p className="product__reviews_txt product__outcome_txt">
					{reviews_count}
				</p>
			</div>
		</>
	);
}

export { ProductRating };
