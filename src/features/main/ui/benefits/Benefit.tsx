import { FC } from 'react';

import { benefitsItems } from '../../lib';

import './Benefit.scss';

const Benefit: FC = () => {
  return (
    <div className='benefits'>
      {benefitsItems.map((item) => (
        <div key={item.id} className='benefits__card'>
          <img className='benefits__card_img' src={item.icon} alt={item.icon} />
          <p className='benefits__card_title'>{item.title}</p>
        </div>
      ))}
    </div>
  );
};

export { Benefit };
