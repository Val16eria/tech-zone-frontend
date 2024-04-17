import { FC, useEffect } from "react";
import { observer } from "mobx-react-lite";

import { Catalog } from "@features/catalog/ui";
import CatalogModel from "@features/catalog/model";

const Phones: FC = observer(() => {

	useEffect(() => {
		if (!CatalogModel.loading) {
			CatalogModel.getPhones();
		}
	}, []);

	return (
		<Catalog category="Смартфоны" products={CatalogModel.phones} />
	);
});

export { Phones };
