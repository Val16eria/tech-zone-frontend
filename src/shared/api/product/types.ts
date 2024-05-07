type TProductType = "television" | "laptop" | "tablet" | "smartphone" | "smartwatch" | "accessory";

interface IProductType {
	id: number;
	type: TProductType;
}

export type { IProductType, TProductType };
