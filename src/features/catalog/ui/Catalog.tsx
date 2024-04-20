import { FC } from "react";
import { BreadcrumbItem, Breadcrumbs } from "@nextui-org/react";

import CatalogModel from "../model";
import { Filter } from "./filter";
import { Sort } from "./sort";
import { IBaseProduct } from "@shared/api";
import {
	Empty,
	Loader, Modal,
	ProductCard
} from "@shared/ui";
import { wordFormat } from "@shared/lib";

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
		<div className="catalog flex-column">
			<Breadcrumbs>
				<BreadcrumbItem href="/">Главная</BreadcrumbItem>
				<BreadcrumbItem>{title}</BreadcrumbItem>
			</Breadcrumbs>

			{products.length ? (
				<div className="flex-column gap-6">
					<div className="catalog__header flex-row">
						<p className="catalog__header_title catalog__header_txt">{title}</p>
						<p className="catalog__header_count catalog__header_txt">
							{products.length} {wordFormat(products.length, "товар", "", "а", "ов")}
						</p>
					</div>

					<div className="catalog__content">
						<div className="catalog__content_filter">
							<Filter/>
						</div>

						<div className="catalog__content_products">
							<div className="catalog__products_sort-container">
								<div className="catalog__products_sort flex-row">
									<div className="catalog__content_filter-modal">
										<Modal buttonTxt="Фильтр">
											<Filter />
										</Modal>
									</div>
									<Sort />
								</div>
							</div>

							<div className="catalog__products_list">
								{products.map((product) =>
									<ProductCard key={product.id} {...product} />
								)}
							</div>
						</div>
					</div>

				</div>
			) : (
				<Empty
					icon={icon}
					title="На данный момент товаров нет"
					description="Следите за обновлениями, чтобы не пропустить новые товары"
				/>
			)}
		</div>
	);
};

export {Catalog};
