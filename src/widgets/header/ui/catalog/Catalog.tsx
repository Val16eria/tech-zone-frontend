import { FC } from 'react';
import { Link } from '@nextui-org/react';

import { catalogItems } from '../../lib';

import './Catalog.scss';

const Catalog: FC = () => {
  return (
    <Link className='catalog'>
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
    </Link>
  );
};

export { Catalog };
