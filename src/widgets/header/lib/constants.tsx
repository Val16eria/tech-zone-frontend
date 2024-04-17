import { ISectionItems } from "@shared/lib";

import {
  Accessories,
  Cart,
  Favourites,
  Laptop,
  Phone,
  Profile,
  SmartWatch,
  Tablet,
  Television
} from "@assets/icons";

const navbarItems: ISectionItems[] = [
  {
    id: 1,
    icon: <Favourites />,
    type: "favourites",
    title: "Избранное",
    path: "/favorites",
  },
  {
    id: 2,
    icon: <Profile />,
    type: "profile",
    title: "Профиль",
    path: "/profile",
  },
  {
    id: 3,
    icon: <Cart />,
    type: "cart",
    title: "Корзина",
    path: "/cart",
  },
];

const catalogItems: ISectionItems[] = [
  {
    id: 1,
    icon: <Television />,
    type: "televisions",
    title: "Телевизоры",
    path: "/televisions"
  },
  {
    id: 2,
    icon: <Laptop />,
    type: "laptops",
    title: "Ноутбуки",
    path: "/laptops"
  },
  {
    id: 3,
    icon: <Tablet />,
    type: "tablets",
    title: "Планшеты",
    path: "/tablets"
  },
  {
    id: 4,
    icon: <Phone />,
    type: "phones",
    title: "Телефоны",
    path: "/phones"
  },
  {
    id: 5,
    icon: <SmartWatch />,
    type: "smart_watches",
    title: "Смарт часы",
    path: "/smart_watches"
  },
  {
    id: 6,
    icon: <Accessories />,
    type: "accessories",
    title: "Аксессуары",
    path: "/accessories"
  },
];

export { navbarItems, catalogItems };
