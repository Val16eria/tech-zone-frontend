import { ICatalogItems, INavbarItems } from './types.ts';

import {
  Accessories,
  Cart,
  Favourites,
  Laptop,
  Orders,
  Phone,
  Profile,
  SmartWatch,
  Tablet,
  Television
} from '../../../assets/icons';

const navbarItems: INavbarItems[] = [
  {
    id: 1,
    icon: <Orders />,
    type: 'orders',
    title: 'Заказы',
    path: '/orders',
  },
  {
    id: 2,
    icon: <Favourites />,
    type: 'favourites',
    title: 'Избранное',
    path: '/favorites',
  },
  {
    id: 3,
    icon: <Profile />,
    type: 'profile',
    title: 'Профиль',
    path: '/profile',
  },
  {
    id: 4,
    icon: <Cart />,
    type: 'cart',
    title: 'Корзина',
    path: '/cart',
  },
];

const catalogItems: ICatalogItems[] = [
  {
    id: 1,
    icon: <Television />,
    type: 'television',
    title: 'Телвизоры',
  },
  {
    id: 2,
    icon: <Laptop />,
    type: 'laptop',
    title: 'Ноутбуки',
  },
  {
    id: 3,
    icon: <Tablet />,
    type: 'tablet',
    title: 'Планшеты',
  },
  {
    id: 4,
    icon: <Phone />,
    type: 'phone',
    title: 'Телефоны',
  },
  {
    id: 5,
    icon: <SmartWatch />,
    type: 'smart_watch',
    title: 'Смарт-часы',
  },
  {
    id: 6,
    icon: <Accessories />,
    type: 'accessories',
    title: 'Аксессуары',
  },
];

export { navbarItems, catalogItems };
