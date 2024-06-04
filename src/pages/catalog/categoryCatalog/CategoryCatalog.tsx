import { FC } from "react";
import { useParams } from "react-router-dom";

import { NotFound } from "@pages/notFound";
import { CategoryTitle } from "@features/catalog/lib";
import { Catalog } from "@features/catalog/ui";
import { TProductType } from "@shared/api";

const CategoryCatalog: FC = () => {
	const { type } = useParams<{ type: TProductType }>();
	const title = CategoryTitle[type as keyof typeof CategoryTitle];

	if (!title || !type) {
		return <NotFound />;
	}

	return (
		<Catalog type={type} title={title} />
	);
};

export { CategoryCatalog };
