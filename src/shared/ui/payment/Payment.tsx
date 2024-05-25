import { FC, useState } from "react";
import { Checkbox, Image } from "@nextui-org/react";

import { ModalPayment } from "@shared/ui";

import PayIcon from "@assets/svg/card-add-icon.svg";
import "./Payment.scss";

interface IPayment {
	isOpen: boolean;
	onOpen: () => void;
	onOpenChange: () => void;
}

const Payment: FC<IPayment> = (
	{
		isOpen,
		onOpen,
		onOpenChange
	}) => {
	const [isCash, setCash] = useState(false);

	return (
		<div className="payment flex-row">
			<Checkbox
				className="payment__checkbox"
				isSelected={isCash}
				onValueChange={setCash}
			>
				<p className="payment__txt">Наличный расчет</p>
			</Checkbox>
			<div className="payment__checkbox flex-row" onClick={onOpen}>
				<Image
					width={24}
					height={24}
					src={PayIcon}
					alt="pay icon"
				/>
				<p className="payment__txt">Привязать карту</p>
			</div>
			<ModalPayment isOpen={isOpen} onOpenChange={onOpenChange} />
		</div>
	);
};

export {Payment};
