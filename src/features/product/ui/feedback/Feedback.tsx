import { FC, useState } from "react";
import {
	Image,
	Divider,
	Pagination
} from "@nextui-org/react";

import { IReviews } from "@shared/api";
import { Empty } from "@shared/ui";

import ReviewIcon from "@assets/svg/review-blue-icon.svg";
import FullStarIcon from "@assets/svg/star.svg";
import EmptyStarIcon from "@assets/svg/star-line-icon.svg";
import EmptyUserPhoto from "@assets/svg/empty-user-avatar.png";
import "./Feedback.scss";

interface IReview {
	reviews: IReviews[];
}

const Feedback: FC<IReview> = ({ reviews }) => {
	const [currentPage, setCurrentPage] = useState(1);
	const reviewsPerPage = 3;
	const numberOfPage = Math.ceil(reviews.length / reviewsPerPage);

	const emptyStar = (
		<Image src={EmptyStarIcon} width={17} height={17} alt="empty star" />
	);

	const fullStar = (
		<Image src={FullStarIcon} width={17} height={17} alt="full star" />
	);

	const displayStars = (rating: number) => {
		const stars = Array(5).fill(emptyStar);
		for (let i = 0; i < rating; i++) {
			stars[i] = fullStar;
		}
		return stars;
	};

	const indexOfLastReview = currentPage * reviewsPerPage;
	const indexOfFirstReview = indexOfLastReview - reviewsPerPage;
	const currentReviews = reviews.slice(indexOfFirstReview, indexOfLastReview);

	const handlePageChange = (page: number) => {
		setCurrentPage(page);
	};

	if (!currentReviews.length) {
		return <Empty icon={ReviewIcon} title="Нет комментариев" />;
	}

	return (
		<div className="feedback flex-column">
			<div>
				{currentReviews.map((review, index) => (
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
										{review.user.trim() !== ""
											? review.user
											: "Неопознанный пользователь"}
									</p>
								</div>
								<div className="feedback__info_rating flex-row">
									<p className="feedback__rating_date">{review.date_created}</p>
									<div className="feedback__rating_stars flex-row">
										{displayStars(review.rating)}
									</div>
								</div>
							</div>
							<p className="feedback__item_txt">{review.text}</p>
						</div>
						<Divider />
					</div>
				))}
			</div>
			{numberOfPage !== 1 && (
				<Pagination
					showControls
					loop
					total={numberOfPage}
					initialPage={currentPage}
					onChange={handlePageChange}
				/>
			)}
		</div>
	);
};

export { Feedback };
