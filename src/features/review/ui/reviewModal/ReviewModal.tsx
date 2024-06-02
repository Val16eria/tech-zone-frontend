import {
	FC,
	useEffect,
	useState
} from "react";
import { observer } from "mobx-react-lite";
import {
	Image,
	Button,
	Modal,
	ModalBody,
	ModalContent,
	ModalFooter,
	ModalHeader,
	Textarea
} from "@nextui-org/react";

import ReviewModel from "../../model";
import { PolicyLink } from "@shared/ui";

import FullStarIcon from "@assets/svg/star.svg";
import EmptyStarIcon from "@assets/svg/star-line-icon.svg";
import "./ReviewModal.scss";

interface IReviewModal {
	isOpen: boolean;
	onOpenChange: () => void;
	id_review: number | null;
	id_product: number;
}

const ReviewModal: FC<IReviewModal> = observer((
	{
		isOpen,
		onOpenChange,
		id_review,
		id_product
	}) => {
	const { review } = ReviewModel;
	const [text, setText] = useState("");
	const [rating, setRating] = useState(0);

	useEffect(() => {
		if (id_review) {
			ReviewModel.getReview(id_review);
		}
	}, [id_review]);

	const emptyStar = (
		<Image src={EmptyStarIcon} width={24} height={24} alt="empty star" />
	);

	const fullStar = (
		<Image src={FullStarIcon} width={24} height={24} alt="full star" />
	);

	const handleStarClick = (index: number) => {
		setRating(index + 1);
	};

	const onSubmit = async () => {
		if (id_review && review) {
			if (text !== review.text && rating !== review.rating) {
				await ReviewModel.updateReview({ text, rating }, id_review);
			} else if (text !== review.text) {
				await ReviewModel.updateReview({ text }, id_review);
			} else if (rating !== review.rating) {
				await ReviewModel.updateReview({ rating }, id_review);
			}
		} else {
			await ReviewModel.createReview({ text, rating }, id_product);
		}
	};

	return (
		<Modal
			isOpen={isOpen}
			onOpenChange={onOpenChange}
			placement="center"
		>
			<ModalContent>
				{(onClose) => (
					<>
						<ModalHeader>
							Написать отзыв
						</ModalHeader>
						<ModalBody>
							<Textarea
								variant="bordered"
								placeholder="Отзыв"
								maxLength={1000}
								maxRows={8}
								value={text}
								onValueChange={setText}
							/>
							<div className="flex-row">
								{Array(5).fill(null).map((_, index) => (
									<div key={index} onClick={() => handleStarClick(index)}>
										{index < rating ? fullStar : emptyStar}
									</div>
								))}
							</div>
						</ModalBody>
						<ModalFooter>
							<div className="review-modal__footer flex-column">
								<Button
									isDisabled={!rating || (text === review?.text && rating === review?.rating)}
									color="primary"
									fullWidth={true}
									onClick={() => onSubmit().then(() => onClose())}
								>
									{id_review ? "Редактировать отзыв" : "Оставить отзыв"}
								</Button>
								<PolicyLink actionTxt="Оставить отзыв"/>
							</div>
						</ModalFooter></>
				)}
			</ModalContent>
		</Modal>
	);
});

export { ReviewModal };
