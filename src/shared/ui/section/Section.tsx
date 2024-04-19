import { FC } from "react";

import { IBaseProduct } from "@shared/api";
import { ProductCard } from "@shared/ui";

import "./Section.scss";

interface ISection {
	title: string;
	products: IBaseProduct[];
}

const Section: FC<ISection> = ({ title, products }) => {

	if (!products.length) {
		return;
	}

	return (
		<div className="section flex-column">
			<div className="flex-column gap-6">
				<p className="section__title">{title}</p>
				<div className="section__content">
					{products.map((product) => <ProductCard key={product.id} {...product} />)}
				</div>
			</div>
		</div>
	);
};

export { Section };
