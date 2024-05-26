import { FC } from "react";
import { Button, useDisclosure } from "@nextui-org/react";

import { ReviewModal } from "../reviewModal";

interface IReviewButton {
	id_review: number;
}

const ReviewButton: FC<IReviewButton> = ({ id_review }) => {
	const { isOpen, onOpen, onOpenChange } = useDisclosure();

	return (
		<>
			<Button
				color="primary"
				size="md"
				fullWidth={true}
				onClick={onOpen}
			>
				Оставить отзыв
			</Button>
			<ReviewModal
				isOpen={isOpen}
				onOpenChange={onOpenChange}
				id_review={id_review}
			/>
		</>
	);
};

export { ReviewButton };
