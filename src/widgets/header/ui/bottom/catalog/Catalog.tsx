import { FC } from 'react';

import { catalogItems } from '../../../lib';

import './Catalog.scss';

const Catalog: FC = () => {
  return (
    <div className='catalog'>
      {catalogItems.map((item) => (
        <div key={item.id} className='catalog__item'>
          {item.icon}
          <p
            className='catalog__item_title'
          >
            {item.title}
          </p>
        </div>
      ))}
    </div>
  );
};

export { Catalog };
