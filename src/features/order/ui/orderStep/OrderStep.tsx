import { FC, PropsWithChildren } from "react";

import "./OrderStep.scss";

interface IOrderStep {
	stepNumber: number;
	title: string;
}

const OrderStep: FC<PropsWithChildren<IOrderStep>> = (
	{
		stepNumber,
		title,
		children
	}) => {
	return (
		<div className="order-step flex-row">
			<span className="order-step__number">{stepNumber}</span>
			<div className="order-step__content flex-column">
				<p className="order-step__content_title">{title}</p>
				{children}
			</div>
		</div>
	);
};

export { OrderStep };
