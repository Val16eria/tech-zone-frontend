import { FC } from "react";
import { useNavigate } from "react-router-dom";
import {
	Button,
	Card,
	CardBody,
	CardFooter, CardHeader, Image
} from "@nextui-org/react";

import { ICart } from "@shared/api";
import { DefaultImage } from "@shared/ui";

import "./PriceSummaryCard.scss";

interface IPriceSummaryCard {
	title?: string;
	products?: ICart[];
	totalDiscount: number;
	totalPrice: number;
	isDisable: boolean;
	onSubmit: () => void;
}

const PriceSummaryCard: FC<IPriceSummaryCard> = (
	{
		title,
		products,
		totalPrice,
		totalDiscount,
		isDisable,
		onSubmit
	}) => {
	const navigate = useNavigate();

	return (
		<Card fullWidth className="price-summary-card">
			{title && (
				<CardHeader>
					<h1 className="price-summary-card__title">{title}</h1>
				</CardHeader>
			)}
			<CardBody className="price-summary-card__body flex-column">
				{products && (
					<div className="price-summary-card__body_products flex-row">
						{products?.map((product) => (
							<div className="price-summary-card__body_img">
								{product.product.photos ? (
									<Image
										src={product.product.photos[0].url}
										radius="none"
										alt="photo order"
										onClick={() => navigate(`/product/${product.product.id}`)}
									/>
								) : <DefaultImage />}
							</div>
						))}
					</div>
				)}
				<div className="price-summary-card__body_txt flex-row">
					<p className="price-summary-card__body_discount">Скидка</p>
					<p className="price-summary-card__body_discount">{totalDiscount.toFixed(0)} ₽</p>
				</div>
				<div className="price-summary-card__body_txt flex-row">
					<p className="price-summary-card__body_price">Итого</p>
					<p className="price-summary-card__body_price">{totalPrice.toFixed(0)} ₽</p>
				</div>
			</CardBody>
			<CardFooter>
				<Button
					isDisabled={isDisable}
					fullWidth
					color="primary"
					onClick={onSubmit}
				>
					Оформить заказ
				</Button>
			</CardFooter>
		</Card>
	);
};

export { PriceSummaryCard };
