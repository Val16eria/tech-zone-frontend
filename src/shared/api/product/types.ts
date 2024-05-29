type TProductType = "television" | "laptop" | "tablet" | "smartphone" | "smartwatch" | "accessory";

interface IProductType {
	id: number;
	type: TProductType;
}

interface ISearch {
	query: string;
	color_main_in?: string;
	price_gte?: number;
	price_lte?: number;
	model_in?: string;
	sort?: string;
	size_page?: number;
	number_page?: number;
}

interface ISuggestions {
	suggestions: string[];
}

interface IFilterTelevision {
	"Цвет": {
		id: "color_main";
		variants: string[];
	},
	"Цена": {
		id: "price";
		min: string;
		max: string;
		label_min: string;
		label_max: string;
		variants: [
			{
				label: string,
				min: null,
				max: number
			},
			{
				label: string;
				min: number;
				max: number;
			},
			{
				label: string;
				min: number;
				max: number;
			},
			{
				label: string;
				min: number;
				max: number;
			},
			{
				label: string;
				min: number;
				max: number;
			},
			{
				label: string;
				min: number;
				max: null;
			}
		]
	},
	"Бренд": {
		id: "model";
		variants: string[];
	},
	"Материал": {
		id: "material";
		variants: string[];
	},
	"Диагональ экрана": {
		id: "screen_diagonal";
		variants: string[];
	},
	"Разрешение экрана": {
		id: "screen_resolution";
		variants: string[];
	},
	"Частота обновления экрана": {
		id: "matrix_frequency";
		variants: number[];
	}
}

export type {
	IFilterTelevision,
	IProductType,
	TProductType,
	ISearch,
	ISuggestions
};
