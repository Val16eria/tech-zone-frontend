import { FC } from 'react';

import { Carousel, Benefit } from '../../features/main';
import { Section } from '../../shared/ui/section';
import { productCardMock } from '../../features/productCard/lib';

import './Main.scss';

const Main: FC = () => {
  return (
    <div className='main'>
      <div className='main__carousel'>
        <Carousel />
      </div>
      <div className='flex flex-col custom-container gap-14'>
        <Section title='Новинки' product={productCardMock} />
        <Section title='Хиты продаж' product={productCardMock} />
        <Benefit/>
      </div>
    </div>
  );
};

export {Main};
