import { FC } from "react";
import {
	BreadcrumbItem,
	Breadcrumbs,
	Spinner
} from "@nextui-org/react";

import CatalogModel from "../model";
import { ILaptops } from "@shared/api";
import { ProductCard } from "@shared/ui";
import { wordFormat } from "@shared/lib";

import "./Catalog.scss";

interface ICatalog {
	category: string;
	products: ILaptops[];
}

const Catalog: FC<ICatalog> = ({ category, products }) => {
	if (CatalogModel.loading) {
		return <Spinner />
	}

	return (
		<div className="catalog custom-container flex-column">
			<Breadcrumbs isDisabled>
				<BreadcrumbItem>Главная</BreadcrumbItem>
				<BreadcrumbItem>Каталог</BreadcrumbItem>
				<BreadcrumbItem>{category}</BreadcrumbItem>
			</Breadcrumbs>
			<div className="flex-column gap-6">
				<div className="catalog__header flex-row">
					<p className="catalog__header_title catalog__header_txt">{category}</p>
					<p className="catalog__header_count catalog__header_txt">
						{products.length} {wordFormat(products.length, "товар", "", "а", "ов")}
					</p>
				</div>
				<div className="catalog__content flex-row">
					<p className="catalog__content_filter">фильтрация</p>
					<div className="catalog__content_list flex-row">
						{products.map((product) =>
							<ProductCard
								key={product.id}
								image=""
								estimation="23"
								reviews={56}
								title={product.name}
								price="129000"
								discounted_price="78999"
							/>
						)}
					</div>
				</div>
			</div>
		</div>
	);
};

export { Catalog };
