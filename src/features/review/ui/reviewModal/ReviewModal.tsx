import { FC, useState } from "react";
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

import { PolicyLink } from "@shared/ui";

import FullStarIcon from "@assets/svg/star.svg";
import EmptyStarIcon from "@assets/svg/star-line-icon.svg";
import "./ReviewModal.scss";

interface IReviewModal {
	isOpen: boolean;
	onOpenChange: () => void;
	id_review: number;
}

const ReviewModal: FC<IReviewModal> = observer((
	{
		isOpen,
		onOpenChange,
		id_review
	}) => {
	const [value, setValue] = useState("");
	const [rating, setRating] = useState(0);

	const emptyStar = (
		<Image src={EmptyStarIcon} width={24} height={24} alt="empty star" />
	);

	const fullStar = (
		<Image src={FullStarIcon} width={24} height={24} alt="full star" />
	);

	const handleStarClick = (index: number) => {
		setRating(index + 1);
	};

	return (
		<Modal isOpen={isOpen} onOpenChange={onOpenChange}>
			<ModalContent>
				<ModalHeader>
					Написать отзыв
				</ModalHeader>
				<ModalBody>
					<Textarea
						variant="bordered"
						placeholder="Отзыв"
						maxLength={1000}
						maxRows={8}
						value={value}
						onValueChange={setValue}
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
							isDisabled={!rating}
							color="primary"
							fullWidth={true}
						>
							Оставить отзыв
						</Button>
						<PolicyLink actionTxt="Оставить отзыв"/>
					</div>
				</ModalFooter>
			</ModalContent>
		</Modal>
	);
});

export { ReviewModal };
