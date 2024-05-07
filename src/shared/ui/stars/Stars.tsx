import { FC } from "react";
import { Image } from "@nextui-org/react";

import StarIcon from "@assets/svg/star.svg";
import "./Stars.scss";

interface IStars {
	rating: number | null;
}

const Stars: FC<IStars> = ({ rating }) => {
	const displayRating = (count: number | null) => {
		if (count) {
			return count % 1 === 0 ? count : count.toFixed(1);
		}
		return 0;
	}
	return (
		<div className="stars flex-row">
			<p className="stars__txt">
				{displayRating(rating)}
			</p>
			<Image
				width={13}
				height={13}
				src={StarIcon}
				alt="star"
			/>
		</div>
	);
};

export { Stars };
