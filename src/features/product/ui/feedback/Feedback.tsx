import {
	FC,
	ReactElement,
	useState
} from "react";
import {
	Divider,
	Image,
	Pagination
} from "@nextui-org/react";

import { IReviews } from "@shared/api";

import FullStarIcon from "@assets/svg/star.svg";
import EmptyStarIcon from "@assets/svg/star-line-icon.svg";
import EmptyUserPhoto from "@assets/svg/empty-user-photo.png";
import "./Feedback.scss";

interface IReview {
	reviews: IReviews[];
}

const Feedback: FC<IReview> = ({ reviews }) => {
	const [page, setPage] = useState(1);

	const emptyStar = <Image
		src={EmptyStarIcon}
		width={17}
		height={17}
		alt="empty star"
	/>

	const fullStar = <Image
		src={FullStarIcon}
		width={17}
		height={17}
		alt="full star"
	/>

	const displayStars = (rating: number) => {
		const stars: ReactElement[] = [emptyStar, emptyStar, emptyStar, emptyStar, emptyStar];

		for (let i = 0; i < rating; i++) {
			stars[i] = fullStar;
		}

		return stars;
	};

	return (
		<div className="feedback flex-column">
			<div>
				{reviews.map((review, index) => (
					<div key={index} className="feedback__list flex-column">
						<div className="feedback__list_item flex-column">
							<div className="feedback__item_info flex-row">
								<div className="feedback__info_user flex-row">
									<Image
										className="feedback__user_img"
										src={EmptyUserPhoto}
										radius="full"
										width={32}
										height={32}
										alt="user image"
									/>
									<p className="feedback__user_name">
										{review.user !== " " ? review.user : "Неопознанный пользователь"}
									</p>
								</div>
								<div className="feedback__info_rating flex-row">
									<p className="feedback__rating_date">{review.date_created}</p>
									<div className="feedback__rating_stars flex-row">
										{displayStars(review.rating).map((star, index) =>
											<span key={index}>{star}</span>)
										}
									</div>
								</div>
							</div>
							<p className="feedback__item_txt">{review.text}</p>
						</div>
						<Divider/>
					</div>
				))}
			</div>
			<Pagination
				showControls
				loop
				total={10}
				initialPage={page}
				onChange={setPage}
			/>
		</div>
	);
};

export { Feedback };
