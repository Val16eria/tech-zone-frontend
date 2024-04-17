import { FC } from "react";

import { IBaseProduct } from "@shared/api";
import { ProductCard } from "@shared/ui";

import "./Section.scss";

interface ISection {
	title?: string;
	products: IBaseProduct[];
}

const Section: FC<ISection> = ({ title, products }) => {
	return (
		<div className="section flex-column">
			{title && <p className="section__title">{title}</p>}
			<div className="section__list">
				{products.map((product) => (
					<ProductCard
						key={product.id}
						id={product.id}
						images={[]}
						estimation={23}
						reviews={56}
						name={product.name}
						price={product.price}
						discounted_price="78999"
					/>
				))}
			</div>
		</div>
	);
};

export { Section };
