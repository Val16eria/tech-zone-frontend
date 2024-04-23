import { FC, useEffect } from "react";
import { observer } from "mobx-react-lite";

import { Catalog } from "@features/catalog/ui";
import CatalogModel from "@features/catalog/model";
import { Empty } from "@shared/ui";

import TabletIcon from "@assets/svg/tablet-icon.svg";

const Tablets: FC = observer(() => {

	useEffect(() => {
		if (!CatalogModel.loading) {
			CatalogModel.getTablets();
		}
	}, []);

	return (
		<>
			{CatalogModel.tablets.length ? (
				<Catalog title="Планшеты" products={CatalogModel.tablets} />
			) : (
				<Empty
					icon={TabletIcon}
					title="На данный момент товаров нет"
					description="Следите за обновлениями, чтобы не пропустить новые товары"
				/>
			)}
		</>
	);
});

export { Tablets };
