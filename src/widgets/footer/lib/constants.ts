import { catalogItems, navbarItems } from "../../header/lib";
import { IFooterItems } from "./types.ts";

const footerItems: IFooterItems[] = [
	{
		id: 1,
		title: "Магазины",
		sections: catalogItems,
	},
	{
		id: 2,
		title: "Покупателям",
		sections: navbarItems,
	},
	{
		id: 3,
		title: "Контакты",
		sections: [
			{
				id: 1,
				title: "г. Ростов-на-Дону, ул. 18-линия, 8",
				path: `https://www.google.com/maps?q=${encodeURIComponent("г. Ростов-на-Дону, ул. 18-линия, 8")}`,
			},
			{
				id: 2,
				title: "8 (800) 500-26-12",
				path: "tel:88005002612",
			},
			{
				id: 3,
				title: "Techzone@wis-techzone.ru",
				path: "mailto:Techzone@wis-techzone.ru"
			},
		],
	}
];

export { footerItems };
