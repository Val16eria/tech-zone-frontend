import { IBenefitsItems, ICarouselItems } from './types.ts';

import Sale1 from '../../../assets/sale1.png';
import Sale2 from '../../../assets/sale2.png';
import Sale3 from '../../../assets/sale3.png';
import Delivery from '../../../assets/delivery.svg';
import Exchange from '../../../assets/exchange.svg';
import Guarantee from '../../../assets/guarantee.svg';

const carouselItems: ICarouselItems[] = [
  {
    id: 1,
    image: Sale1,
    path: '/sales'
  },
  {
    id: 2,
    image: Sale2,
    path: '/sales'
  },
  {
    id: 3,
    image: Sale3,
    path: '/sales'
  },
];

const benefitsItems: IBenefitsItems[] = [
  {
    id: 1,
    icon: Delivery,
    title: 'Скидки до -50% на весь ассортимент',
  },
  {
    id: 2,
    icon: Exchange,
    title: '30 дней на обмен или возврат товара',
  },
  {
    id: 3,
    icon: Guarantee,
    title: 'Гарантия качества и страхование техники',
  },
];

export { carouselItems, benefitsItems };
