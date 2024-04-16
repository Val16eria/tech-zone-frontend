import { FC, useEffect } from "react";
import { observer } from "mobx-react-lite";

import { Catalog } from "@features/catalog/ui";
import CatalogModel from "@features/catalog/model";

const Laptop: FC = observer(() => {

	useEffect(() => {
		if (!CatalogModel.loading) {
			CatalogModel.getLaptops();
		}
	}, []);

	return (
		<Catalog category="Ноутбуки" products={CatalogModel.laptops} />
	);
});

export { Laptop };
