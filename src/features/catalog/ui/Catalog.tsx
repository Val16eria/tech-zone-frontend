import {
	FC,
	useEffect,
	useState
} from "react";
import { useLocation } from "react-router-dom";
import { observer } from "mobx-react-lite";
import { Pagination } from "@nextui-org/react";

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
	const { pathname } = useLocation();
	const {
		products,
		meta,
		filters,
		loading,
		error
	}  = CatalogModel;
	const [currentPage, setCurrentPage] = useState(1);
	const [selectedFilters, setSelectedFilters] = useState({});
	const [selectedSort, setSelectedSort] = useState("popular");
	const category = catalogItems.find((item) => item.type === type)!;

	useEffect(() => {
		setSelectedFilters({});
		setSelectedSort("popular");
		if (type) {
			CatalogModel.getProducts(type, { sort: "popular" });
		} else if (suggestion) {
			CatalogModel.getSuggestionProduct({ query: suggestion, sort: "popular" });
		}
	}, [pathname, suggestion, type]);

	useEffect(() => {
		if (type) {
			CatalogModel.getProducts(type,
				{
					sort: selectedSort,
					size_page: 9,
					number_page: currentPage,
					...selectedFilters
				}
			);
		} else if (suggestion) {
			CatalogModel.getSuggestionProduct(
				{
					query: suggestion,
					sort: selectedSort,
					size_page: 9,
					number_page: currentPage,
					...selectedFilters
				}
			);
		}
		CatalogModel.getFilter(type);
		window.scrollTo(0, 0);
	}, [selectedFilters, selectedSort, currentPage, type, suggestion]);

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
			productsCount={meta?.objectsTotal}
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
							<Sort selectedSort={selectedSort} setSelectedSort={setSelectedSort}/>
						</div>
					</div>
					{products.length ? (
						<div className="flex-column gap-6">
							<div className="catalog__content_products">
								{products.map((product) => (
									<ProductCard key={product.id} {...product} />
								))}
							</div>
							{meta && meta.pagesTotal > 1 && (
								<Pagination
									showControls
									loop
									total={meta.pagesTotal}
									initialPage={currentPage}
									onChange={(page) => setCurrentPage(page)}
								/>
							)}
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
