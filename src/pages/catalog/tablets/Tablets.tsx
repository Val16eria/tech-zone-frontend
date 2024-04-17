import { FC, useEffect } from "react";
import { observer } from "mobx-react-lite";

import { Catalog } from "@features/catalog/ui";
import CatalogModel from "@features/catalog/model";

const Tablets: FC = observer(() => {

	useEffect(() => {
		if (!CatalogModel.loading) {
			CatalogModel.getTablets();
		}
	}, []);

	return (
		<Catalog category="Планшеты" products={CatalogModel.tablets} />
	);
});

export { Tablets };
