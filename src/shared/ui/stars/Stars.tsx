import { FC } from "react";
import { Image } from "@nextui-org/react";

import StarIcon from "@assets/svg/star.svg";
import "./Stars.scss";

interface IStars {
	rating: number | null;
}

const Stars: FC<IStars> = ({ rating }) => {
	return (
		<div className="stars flex-row">
			<p className="stars__txt">
				{rating || 0}
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
