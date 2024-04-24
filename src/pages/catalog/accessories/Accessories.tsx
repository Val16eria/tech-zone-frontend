import { FC, useEffect } from "react";
import { observer } from "mobx-react-lite";

import { Catalog } from "@features/catalog/ui";
import CatalogModel from "@features/catalog/model";

import AccessoriesIcon from "@assets/svg/accessories-icon.svg";

const Accessories: FC = observer(() => {

	useEffect(() => {
			if (!CatalogModel.loading) {
				CatalogModel.getAccessories();
			}
	}, []);

	return (
		<Catalog
			title="Аксессуары"
			icon={AccessoriesIcon}
			products={CatalogModel.accessories}
		/>
	);
});

export { Accessories };
