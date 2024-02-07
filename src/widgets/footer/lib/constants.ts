import { catalogItems, navbarItems } from '../../header/lib';
import { IFooterItems } from './types.ts';

const footerItems: IFooterItems[] = [
  {
    id: 1,
    title: 'Магазины',
	  sections: catalogItems,
  },
  {
    id: 2,
    title: 'Покупателям',
    sections: navbarItems,
  },
  {
    id: 3,
    title: 'Контакты',
	  sections: [
      {
        id: 1,
        title: 'г. Ростов-на-Дону, ул. Пушкина, 1',
      },
		  {
        id: 2,
			  title: '8 (800) 500-26-12',
		  },
		  {
        id: 3,
			  title: 'hello@techzone.ru',
		  },
    ],
  }
];

export { footerItems };