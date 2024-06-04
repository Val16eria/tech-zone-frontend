import { IBenefitsItems } from "./types.ts";

import Delivery from "../../../assets/svg/delivery.svg";
import Exchange from "../../../assets/svg/exchange.svg";
import Guarantee from "../../../assets/svg/guarantee.svg";

const benefitsItems: IBenefitsItems[] = [
  {
    id: 1,
    icon: Delivery,
    title: "Скидки до -50% на весь ассортимент",
  },
  {
    id: 2,
    icon: Exchange,
    title: "30 дней на обмен или возврат товара",
  },
  {
    id: 3,
    icon: Guarantee,
    title: "Гарантия качества и страхование техники",
  },
];

export { benefitsItems };
