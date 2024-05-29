import { FC, useEffect } from "react";
import { observer } from "mobx-react-lite";
import { useParams } from "react-router-dom";

import { NotFound } from "@pages/notFound";
import { CategoryTitle } from "@features/catalog/lib";
import CatalogModel from "@features/catalog/model";
import { Catalog } from "@features/catalog/ui";
import { TProductType } from "@shared/api";
import { ErrorNotice, Loader } from "@shared/ui";

const CategoryCatalog: FC = observer(() => {
	const { type } = useParams<{ type: TProductType }>();
	const {
		products,
		loading,
		error,
		filters
	} = CatalogModel;
	const title = CategoryTitle[type as keyof typeof CategoryTitle];

	useEffect(() => {
		if (type) {
			CatalogModel.getProducts(type);
		}
		CatalogModel.getFilter(type);
	}, [type]);

	if (!title || !type) {
		return <NotFound />;
	}

	if (loading) {
		return <Loader />;
	}

	if (error) {
		return <ErrorNotice />;
	}

	return (
		<Catalog
			title={title}
			filters={filters}
			products={products}
		/>
	);
});

export { CategoryCatalog };
