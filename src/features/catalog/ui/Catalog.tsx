import { FC } from "react";

import CatalogModel from "../model";
import { Filter } from "./filter";
import { IBaseProduct } from "@shared/api";
import { Loader, Section } from "@shared/ui";

interface ICatalog {
	title: string;
	icon: string;
	products: IBaseProduct[];
}

const Catalog: FC<ICatalog> = (
	{
		title,
		icon,
		products
	}) => {

	if (CatalogModel.loading) {
		return (
			<Loader />
		)
	}

	return (
		<Section
			title={title}
			isShow={true}
			icon={icon}
			products={products}
		>
			<Filter />
		</Section>
	);
};

export { Catalog };
