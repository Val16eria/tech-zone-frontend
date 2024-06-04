import { IBaseProductQuery } from "../catalog";

type TProductType = "television" | "laptop" | "tablet" | "smartphone" | "smartwatch" | "accessory";

interface IBanner {
	link: string;
	id_product: number;
}

interface IProductType {
	id: number;
	type: TProductType;
}

interface ISearch extends IBaseProductQuery {
	query: string;
	sort?: string;
	size_page?: number;
	number_page?: number;
}

interface ISuggestions {
	suggestions: string[];
}

interface IFilterVariantsPrice {
	label: string;
	min: number | null;
	max: number | null;
}

interface IFilterPrice {
	id: string;
	label: string;
	min: number;
	max: number;
	label_min: string;
	label_max: string;
	variants: IFilterVariantsPrice[];
}

interface IProductFilters {
	id: string;
	label: string;
	variants: string[] | number[];
}

interface IFilter {
	product_filters: IProductFilters[];
	price: IFilterPrice;
}

export type {
	IBanner,
	IFilterVariantsPrice,
	IFilter,
	IProductType,
	TProductType,
	ISearch,
	ISuggestions
};
