import { FC } from "react";

import CatalogModel from "../model";
import { Filter } from "./filter";
import { Sort } from "./sort";
import { IBaseProduct } from "@shared/api";
import {
	Empty,
	Loader,
	Modal,
	ProductCard, Section
} from "@shared/ui";

import "./Catalog.scss";

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
			isBreadcrumbs={true}
			productsCount={products.length}
		>
			{products.length ? (
				<div className="catalog">
					<div className="catalog__filter">
						<Filter/>
					</div>

					<div className="catalog__content">
						<div className="catalog__content_sort">
							<div className="catalog__content_sort-position flex-row">
								<div className="catalog__content_filter-modal">
									<Modal buttonTxt="Фильтр">
										<Filter/>
									</Modal>
								</div>
								<Sort/>
							</div>
						</div>

						<div className="catalog__content_products">
							{products.map((product) => <ProductCard key={product.id} {...product} />)}
						</div>
					</div>
				</div>
			) : (
				<Empty
					icon={icon}
					title="Товаров еще нет"
					description="Следите за обновлениями, чтобы не пропустить новые товары"
				/>
			)}
		</Section>
	);
};

export { Catalog };
