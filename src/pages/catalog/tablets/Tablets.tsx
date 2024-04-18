import { FC, useEffect } from "react";
import { observer } from "mobx-react-lite";

import { Catalog } from "@features/catalog/ui";
import CatalogModel from "@features/catalog/model";

import TabletIcon from "@assets/svg/tablet-icon.svg";

const Tablets: FC = observer(() => {

	useEffect(() => {
		if (!CatalogModel.loading) {
			CatalogModel.getTablets();
		}
	}, []);

	return (
		<Catalog
			title="Планшеты"
			icon={TabletIcon}
			products={CatalogModel.tablets}
		/>
	);
});

export { Tablets };
