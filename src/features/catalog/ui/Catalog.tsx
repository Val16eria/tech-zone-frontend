import {
	FC,
	useEffect,
	useState
} from "react";
import { observer } from "mobx-react-lite";

import { Filter, Sort } from "@features/catalog/ui";
import { catalogItems } from "@widgets/header/lib";
import CatalogModel from "@features/catalog/model";
import { TProductType } from "@shared/api";
import {
	ProductCard,
	Modal,
	Notice,
	Section,
	Loader,
	ErrorNotice
} from "@shared/ui";

import SearchIcon from "@assets/svg/search-icon.svg";
import "./Catalog.scss";

interface ICatalog {
	type?: TProductType;
	suggestion?: string;
	title: string;
}

const Catalog: FC<ICatalog> = observer((
	{
		type,
		suggestion,
		title
	}) => {
	const { products, filters, loading, error }  = CatalogModel;
	const [selectedFilters, setSelectedFilters] = useState({});
	const [selectedSort, setSelectedSort] = useState("popular");
	const category = catalogItems.find((item) => item.type === type)!;

	useEffect(() => {
		if (type) {
			CatalogModel.getProducts(type, { sort: selectedSort, ...selectedFilters });
		} else if (suggestion) {
			CatalogModel.getSuggestionProduct({ query: suggestion, sort: selectedSort, ...selectedFilters });
		}
		CatalogModel.getFilter(type);
	}, [selectedFilters, selectedSort, suggestion, type]);

	if (suggestion && !products.length) {
		return <Notice
			icon={SearchIcon}
			title="По вашему запросу ничего не найдено"
			description="Попробуйте изменить ваш запрос"
		/>
	}

	if (loading) {
		return <Loader />;
	}

	if (error) {
		return <ErrorNotice />;
	}

	if (!products.length && Object.keys(selectedFilters).length === 0) {
		return <Notice
			icon={category?.icon}
			title="Товаров еще нет"
			description="Следите за обновлениями, чтобы не пропустить новые товары"
		/>;
	}

	return (
		<Section
			title={title}
			isBreadcrumbs={true}
			productsCount={products.length}
		>
			<div className="catalog">
				<div className="catalog__filter">
					<Filter filters={filters} setSelectedFilters={setSelectedFilters} />
				</div>
				<div className="catalog__content">
					<div className="catalog__content_sort">
						<div className="catalog__content_sort-position flex-row">
							<div className="catalog__content_filter-modal">
								<Modal buttonTxt="Фильтр">
									<Filter filters={filters} setSelectedFilters={setSelectedFilters} />
								</Modal>
							</div>
							<Sort selectedSort={selectedSort} setSelectedSort={setSelectedSort} />
						</div>
					</div>
					{products.length ? (
						<div className="catalog__content_products">
							{products.map((product) => (
								<ProductCard key={product.id} {...product} />
							))}
						</div>
					) : (
						<Notice
							icon={category?.icon}
							title="Ничего не найдено"
							description="Измените фильтры"
						/>
					)}
				</div>
			</div>
		</Section>
	);
});

export { Catalog };
