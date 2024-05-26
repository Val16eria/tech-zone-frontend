import { FC, useState } from "react";
import {Checkbox, CheckboxGroup, Image} from "@nextui-org/react";

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
	const [selected, setSelected] = useState(["cash"])

	return (
		<div className="payment flex-row">
			<CheckboxGroup value={selected} onValueChange={setSelected}>
				<Checkbox
					className={`payment__checkbox ${selected.includes("cash") && "payment__checkbox_active"}`}
					value="cash"
				>
					<p className="payment__txt">Наличный расчет</p>
				</Checkbox>
			</CheckboxGroup>
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

export { Payment };
