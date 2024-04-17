import { FC, useEffect } from "react";
import { observer } from "mobx-react-lite";

import { Catalog } from "@features/catalog/ui";
import CatalogModel from "@features/catalog/model";

const Accessories: FC = observer(() => {

	useEffect(() => {
		if (!CatalogModel.loading) {
			CatalogModel.getAccessories();
		}
	}, []);

	return (
		<Catalog category="Аксессуары" products={CatalogModel.accessories} />
	);
});

export { Accessories };
