import { FC, useEffect } from "react";
import { observer } from "mobx-react-lite";

import { Catalog } from "@features/catalog/ui";
import CatalogModel from "@features/catalog/model";

const SmartWatches: FC = observer(() => {

	useEffect(() => {
		if (!CatalogModel.loading) {
			CatalogModel.getSmartWatches();
		}
	}, []);

	return (
		<Catalog category="Смарт-часы" products={CatalogModel.smartWatches} />
	);
});

export { SmartWatches };
