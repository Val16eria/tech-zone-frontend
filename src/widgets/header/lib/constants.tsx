import { ISectionItems } from "@shared/lib";

import TelevisionIcon from "@assets/svg/tv-icon.svg";
import LaptopIcon from "@assets/svg/laptop-icon.svg";
import TabletIcon from "@assets/svg/tablet-icon.svg";
import PhoneIcon from "@assets/svg/smartphone-icon.svg";
import SmartWatchIcon from "@assets/svg/watch-icon.svg";
import AccessoriesIcon from "@assets/svg/accessories-icon.svg";

import FavouriteIcon from "@assets/svg/favourite-icon.svg";
import ProfileIcon from "@assets/svg/profile-icon.svg";
import CartIcon from "@assets/svg/cart-icon.svg";

const navbarItems: ISectionItems[] = [
  {
    id: 1,
    icon: FavouriteIcon,
    type: "favourites",
    title: "Избранное",
    path: "/favourites",
  },
  {
    id: 2,
    icon: ProfileIcon,
    type: "profile",
    title: "Профиль",
    path: "/profile",
  },
  {
    id: 3,
    icon: CartIcon,
    type: "cart",
    title: "Корзина",
    path: "/cart",
  },
];

const catalogItems: ISectionItems[] = [
  {
    id: 1,
    icon: TelevisionIcon,
    type: "televisions",
    title: "Телевизоры",
    path: "/televisions"
  },
  {
    id: 2,
    icon: LaptopIcon,
    type: "laptops",
    title: "Ноутбуки",
    path: "/laptops"
  },
  {
    id: 3,
    icon: TabletIcon,
    type: "tablets",
    title: "Планшеты",
    path: "/tablets"
  },
  {
    id: 4,
    icon: PhoneIcon,
    type: "phones",
    title: "Телефоны",
    path: "/phones"
  },
  {
    id: 5,
    icon: SmartWatchIcon,
    type: "smart_watches",
    title: "Смарт часы",
    path: "/smart_watches"
  },
  {
    id: 6,
    icon: AccessoriesIcon,
    type: "accessories",
    title: "Аксессуары",
    path: "/accessories"
  },
];

export { navbarItems, catalogItems };
