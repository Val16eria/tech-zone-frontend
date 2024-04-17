import { FC } from "react";

import { IBaseProduct } from "@shared/api";
import { ProductCard } from "@shared/ui";

import "./Section.scss";

interface ISection {
	title?: string;
	product: IBaseProduct[];
}

const Section: FC<ISection> = ({ title, product }) => {
  return (
    <div className="section flex-column">
      {title && <p className="section__title">{title}</p>}
      <div className="section__list">
        {product.map((card) => (
          <ProductCard key={card.id} {...card} />
        ))}
      </div>
    </div>
  );
};

export { Section };
