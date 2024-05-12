import { FC, useState } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import {
	Button,
	Input,
	Link,
	Modal,
	ModalBody,
	ModalContent,
	ModalFooter,
	ModalHeader
} from "@nextui-org/react";

import { ModalLinkCardFormData, modalLinkCardSchema } from "../../lib";

import "./ModalLinkCard.scss";

interface IModalLinkCard {
	isOpen: boolean;
	onOpenChange: () => void;
}

const ModalLinkCard: FC<IModalLinkCard> = ({ isOpen, onOpenChange }) => {
	const [formattedCardNumber, setFormattedCardNumber] = useState("");
	const [formattedCardDate, setFormattedCardDate] = useState("");
	const [isValid, setValid] = useState(false);

	const {
		register,
		handleSubmit,
		getValues,
		formState: { errors }} = useForm<ModalLinkCardFormData>({
		resolver: yupResolver(modalLinkCardSchema),
		mode: "onSubmit"
	});

	const onSubmit = (data: ModalLinkCardFormData) => {
		// add request
	};

	const formatCardNumber = (value: string) => {
		const unmaskedValue = value.replace(/\s/g, "");
		const formattedValue = unmaskedValue.replace(/(\d{4})(?=\d)/g, "$1 ");
		setFormattedCardNumber(formattedValue);
	};

	const formatCardDate = (value: string) => {
		const numericValue = value.replace(/\D/g, "");

		if (!numericValue) {
			setFormattedCardDate("");
		} else if (numericValue.length > 2) {
			setFormattedCardDate(numericValue.slice(0, 2) + "/" + numericValue.slice(2));
		} else {
			setFormattedCardDate(numericValue);
		}
	};

	const formValid = () => {
		const { card_number, card_date, card_cvv} = getValues();
		setValid(!!card_number && !!card_date && !!card_cvv);
	};

	return (
		<Modal isOpen={isOpen} onOpenChange={onOpenChange}>
			<ModalContent>
				<ModalHeader>
					Привязка карты
				</ModalHeader>
				<form onSubmit={handleSubmit(onSubmit)} onChange={formValid}>
					<ModalBody>
						<div className="modal-link-card__body">
							<Input
								type="text"
								color="default"
								variant="bordered"
								placeholder="Номер карты"
								errorMessage={errors.card_number?.message ?? ""}
								isInvalid={!!errors.card_number?.message}
								value={formattedCardNumber}
								maxLength={19}
								{...register("card_number")}
								onChange={(e) => formatCardNumber(e.target.value)}
							/>
							<Input
								type="text"
								color="default"
								variant="bordered"
								placeholder="ММ/ГГ"
								errorMessage={errors.card_date?.message ?? ""}
								isInvalid={!!errors.card_date?.message}
								value={formattedCardDate}
								maxLength={5}
								{...register("card_date")}
								onChange={(e) => formatCardDate(e.target.value)}
							/>
							<Input
								type="text"
								color="default"
								variant="bordered"
								placeholder="CVV/CVC"
								errorMessage={errors.card_cvv?.message ?? ""}
								isInvalid={!!errors.card_cvv?.message}
								maxLength={3}
								{...register("card_cvv")}
							/>
						</div>
					</ModalBody>
					<ModalFooter>
						<div className="modal-link-card__footer flex-column">
							<Button
								isDisabled={!isValid}
								fullWidth={true}
								color="primary"
								type="submit"
							>
								Привязать карту
							</Button>
							<p className="modal-link-card__footer_txt">Нажимая кнопку "Привязать карту", Вы соглашаетесь
								c условиями <Link href="/policy" size="sm">политики конфиденциальности</Link>
							</p>
						</div>
					</ModalFooter>
				</form>
			</ModalContent>
		</Modal>
	);
};

export { ModalLinkCard };
