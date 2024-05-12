import { FC, useEffect } from "react";
import { observer } from "mobx-react-lite";

import { Catalog } from "@features/catalog/ui";
import CatalogModel from "@features/catalog/model";

import SmartWatchIcon from "@assets/svg/watch-icon.svg";

const SmartWatches: FC = observer(() => {

	useEffect(() => {
		CatalogModel.getSmartWatches();
	}, []);

	return (
		<Catalog
			title="Смарт-часы"
			icon={SmartWatchIcon}
			products={CatalogModel.smartWatches}
		/>
	);
});

export { SmartWatches };
