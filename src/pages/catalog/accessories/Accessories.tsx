import { FC, useEffect } from "react";
import { observer } from "mobx-react-lite";

import { Catalog } from "@features/catalog/ui";
import CatalogModel from "@features/catalog/model";
import { Empty } from "@shared/ui";

import AccessoriesIcon from "@assets/svg/accessories-icon.svg";

const Accessories: FC = observer(() => {

	useEffect(() => {
		if (!CatalogModel.loading) {
			CatalogModel.getAccessories();
		}
	}, []);

	return (
		<>
			{CatalogModel.accessories.length ? (
				<Catalog title="Аксессуары" products={CatalogModel.accessories} />
			) : (
				<Empty
					icon={AccessoriesIcon}
					title="На данный момент товаров нет"
					description="Следите за обновлениями, чтобы не пропустить новые товары"
				/>
			)}
		</>
	);
});

export { Accessories };
