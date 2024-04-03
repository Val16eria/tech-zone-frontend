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
    type: "television",
    title: "Телевизоры",
    path: "/televisions"
  },
  {
    id: 2,
    icon: <Laptop />,
    type: "laptop",
    title: "Ноутбуки",
    path: "/laptop"
  },
  {
    id: 3,
    icon: <Tablet />,
    type: "tablet",
    title: "Планшеты",
    path: "/tablets"
  },
  {
    id: 4,
    icon: <Phone />,
    type: "phone",
    title: "Телефоны",
    path: "/phones"
  },
  {
    id: 5,
    icon: <SmartWatch />,
    type: "smart_watch",
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
