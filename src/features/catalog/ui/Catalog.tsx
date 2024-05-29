import { FC } from "react";
import { useParams } from "react-router-dom";

import { Filter, Sort } from "@features/catalog/ui";
import { catalogItems } from "@widgets/header/lib";
import {
	IBaseProduct,
	IFilterTelevision,
	TProductType
} from "@shared/api";
import {
	ProductCard,
	Modal,
	Notice,
	Section,
} from "@shared/ui";

import "./Catalog.scss";

interface ICatalog {
	title: string;
	filters: IFilterTelevision | null;
	products: IBaseProduct[];
}

const Catalog: FC<ICatalog> = ({ title, filters, products}) => {
	const { type } = useParams<{ type: TProductType }>();
	const category = catalogItems.find((item) => item.type === type)!;

	return (
		<Section
			title={title}
			isBreadcrumbs={true}
			productsCount={products.length}
		>
			{products.length ? (
				<div className="catalog">
					<div className="catalog__filter">
						<Filter filters={filters} />
					</div>
					<div className="catalog__content">
						<div className="catalog__content_sort">
							<div className="catalog__content_sort-position flex-row">
								<div className="catalog__content_filter-modal">
									<Modal buttonTxt="Фильтр">
										<Filter filters={filters} />
									</Modal>
								</div>
								<Sort />
							</div>
						</div>
						<div className="catalog__content_products">
							{products.map((product) => (
								<ProductCard key={product.id} {...product} />
							))}
						</div>
					</div>
				</div>
			) : (
				<Notice
					icon={category?.icon}
					title="Товаров еще нет"
					description="Следите за обновлениями, чтобы не пропустить новые товары"
				/>
			)}
		</Section>
	);
};

export { Catalog };
