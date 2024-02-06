import { ICarouselItems } from './types.ts';

import Sale1 from '../../../assets/sale1.png';
import Sale2 from '../../../assets/sale2.png';
import Sale3 from '../../../assets/sale3.png';

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

export { carouselItems };
