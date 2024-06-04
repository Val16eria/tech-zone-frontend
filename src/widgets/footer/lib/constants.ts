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
				title: "8 (904) 340-55-56",
				path: "tel:89043405556",
			},
			{
				id: 3,
				title: "office@wis.software",
				path: "mailto:office@wis.software"
			},
		],
	}
];

export { footerItems };
