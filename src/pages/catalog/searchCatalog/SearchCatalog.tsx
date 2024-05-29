import { FC, useEffect } from "react";
import { observer } from "mobx-react-lite";
import { useParams } from "react-router-dom";

import { NotFound } from "@pages/notFound";
import CatalogModel from "@features/catalog/model";
import { Catalog } from "@features/catalog/ui";
import { TProductType } from "@shared/api";
import {
	ErrorNotice,
	Loader,
	Notice
} from "@shared/ui";

import SearchIcon from "@assets/svg/search-icon.svg";

const SearchCatalog: FC = observer(() => {
	const { type } = useParams<{ type: TProductType }>();
	const { suggestion } = useParams<{ suggestion: string }>();
	const {
		products,
		loading,
		error,
		filters
	} = CatalogModel;

	useEffect(() => {
		if (suggestion) {
			CatalogModel.getSuggestionProduct({ query: suggestion });
		}
		CatalogModel.getFilter(type);
	}, [suggestion, type]);

	if (!suggestion) {
		return <NotFound />;
	}

	if (loading) {
		return <Loader />;
	}

	if (error) {
		return <ErrorNotice />;
	}

	if (!products.length) {
		return <Notice
			icon={SearchIcon}
			title="По вашему запросу ничего не найдено"
			description="Попробуйте изменить ваш запрос"
		/>
	}

	return (
		<Catalog
			title={suggestion}
			filters={filters}
			products={products}
		/>
	);
});

export { SearchCatalog };
