import { FC } from "react";

import { discountedPrice } from "@shared/lib";

import "./Price.scss";

interface IPrice {
	price: number;
	discount: number;
	quantity: number;
}

const Price: FC<IPrice> = (
	{
		price,
		discount,
		quantity
	}) => {
	return (
		<div className="price flex-column">
			<p className="price__discount">
				{`${discountedPrice(price * quantity, discount) || quantity * price} ₽`}
			</p>
			{!!discount && <p className="price__price">{`${quantity * price} ₽`}
      </p>}
		</div>
	);
};

export {Price};
