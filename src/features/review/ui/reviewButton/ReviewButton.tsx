import { FC } from "react";
import { Button, useDisclosure } from "@nextui-org/react";

import { ReviewModal } from "../reviewModal";

interface IReviewButton {
	id_review: number | null;
	id_product: number;
}

const ReviewButton: FC<IReviewButton> = ({ id_review, id_product }) => {
	const { isOpen, onOpen, onOpenChange } = useDisclosure();
	return (
		<>
			<Button
				color="primary"
				size="md"
				fullWidth={true}
				onClick={onOpen}
			>
				{id_review ? "Редактировать отзыв" : "Оставить отзыв"}
			</Button>
			<ReviewModal
				isOpen={isOpen}
				onOpenChange={onOpenChange}
				id_review={id_review}
				id_product={id_product}
			/>
		</>
	);
};

export { ReviewButton };
