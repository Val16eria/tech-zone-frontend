import { FC } from "react";
import { useParams } from "react-router-dom";

import { NotFound } from "@pages/notFound";
import { Catalog } from "@features/catalog/ui";

const SearchCatalog: FC = () => {
	const { suggestion } = useParams<{ suggestion: string }>();

	if (!suggestion) {
		return <NotFound />;
	}

	return (
		<Catalog suggestion={suggestion} title={suggestion} />
	);
};

export { SearchCatalog };
