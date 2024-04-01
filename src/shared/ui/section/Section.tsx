import { FC } from 'react';

import { Card } from '../../../features/productCard';
import { IProduct } from '../../lib';

import './Section.scss';

interface ISection {
	title?: string;
	product: IProduct[];
}

const Section: FC<ISection> = ({ title, product }) => {
  return (
    <div className='section flex-column'>
      {title && <p className='section__title'>{title}</p>}
      <div className='section__list flex-row'>
        {product.map((card) => (
          <Card key={card.id} {...card} />
        ))}
      </div>
    </div>
  );
};

export { Section };
