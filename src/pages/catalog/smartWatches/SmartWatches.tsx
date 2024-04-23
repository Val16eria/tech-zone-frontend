import { FC, useEffect } from "react";
import { observer } from "mobx-react-lite";

import { Catalog } from "@features/catalog/ui";
import CatalogModel from "@features/catalog/model";
import { Empty } from "@shared/ui";

import SmartWatchIcon from "@assets/svg/watch-icon.svg";

const SmartWatches: FC = observer(() => {

	useEffect(() => {
		if (!CatalogModel.loading) {
			CatalogModel.getSmartWatches();
		}
	}, []);

	return (
		<>
			{CatalogModel.smartWatches.length ? (
				<Catalog title="Смарт-часы" products={CatalogModel.smartWatches} />
			) : (
				<Empty
					icon={SmartWatchIcon}
					title="На данный момент товаров нет"
					description="Следите за обновлениями, чтобы не пропустить новые товары"
				/>
			)}
		</>
	);
});

export { SmartWatches };
