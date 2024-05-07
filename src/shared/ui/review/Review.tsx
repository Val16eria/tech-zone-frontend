import { FC } from "react";
import { Image } from "@nextui-org/react";

import { wordFormat } from "@shared/lib";

import ReviewsIcon from "@assets/svg/review.svg";
import "./Review.scss";

interface IReview {
	reviews: number;
}

const Review: FC<IReview> = ({ reviews }) => {
	const checkReviewCount = (count: number) => {
		if (count) {
			return `${count} ${wordFormat(count, "отзыв", "", "а", "ов")}`;
		} else {
			return "нет отзывов"
		}
	};

	return (
		<div className="review flex-row">
			<Image
				width={13}
				height={13}
				src={ReviewsIcon}
				alt="review"
			/>
			<p className="review__txt">
				{checkReviewCount(reviews)}
			</p>
		</div>
	);
};

export { Review };
