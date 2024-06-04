import {
	FC,
	useEffect,
	useRef
} from "react";
import { Button, useDisclosure } from "@nextui-org/react";
import { ReviewModal } from "../reviewModal";
import { observer } from "mobx-react-lite";
import ReviewModel from "../../model";

interface IReviewButton {
	id_review: number | null;
	id_product: number;
}

const ReviewButton: FC<IReviewButton> = observer(({ id_review, id_product }) => {
	const { isOpen, onOpen, onOpenChange } = useDisclosure();
	const reviewRef = useRef(id_review);
	const review = ReviewModel.getReview(id_product);

	useEffect(() => {
		if (review && review.id !== reviewRef.current) {
			reviewRef.current = review.id;
		}
	}, [review]);

	return (
		<>
			<Button
				color="primary"
				size="md"
				fullWidth={true}
				onClick={onOpen}
			>
				{review ? "Редактировать отзыв" : "Оставить отзыв"}
			</Button>
			<ReviewModal
				isOpen={isOpen}
				onOpenChange={onOpenChange}
				id_review={reviewRef.current}
				id_product={id_product}
			/>
		</>
	);
});

export { ReviewButton };
