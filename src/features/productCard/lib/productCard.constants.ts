import { IProduct } from "@shared/lib";

import Product1 from "../../../assets/images/iphone-15.png";
import Product2 from "../../../assets/images/mackbook.png";

const productCardMock: IProduct[] = [
  {
    id: 1,
    image: Product1,
    estimation: "4,3",
    reviews: 126,
    title: "Смартфон Apple iPhone 15 Pro 256GB Blue Titanium",
    price: "179 999",
    discounted_price: "123 999",
  },
  {
    id: 2,
    image: Product2,
    estimation: "4,6",
    reviews: 284,
    title: "Телевизор Samsung Ultra HD (4K) LED 55",
    price: "85 999",
    discounted_price: "77 399",
  },
  {
    id: 3,
    image: Product2,
    estimation: "5,0",
    reviews: 37,
    title: "Ноутбук Apple MacBook Air 13 M1/8/256GB Silver (MGN93)",
    price: "95 999",
    discounted_price: null,
  },
  {
    id: 4,
    image: Product1,
    estimation: "4,6",
    reviews: 739,
    title: "Ноутбук игровой MSI Katana 17 B11UCX-882XRU",
    price: "89 999",
    discounted_price: null,
  },
  {
    id: 5,
    image: Product1,
    estimation: "4,9",
    reviews: 364,
    title: "Смарт-часы Xiaomi M2216W1 Ivory",
    price: "9 999",
    discounted_price: "7 999",
  },
];

export { productCardMock };
