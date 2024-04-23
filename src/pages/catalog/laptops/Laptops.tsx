import { FC, useEffect } from "react";
import { observer } from "mobx-react-lite";

import { Catalog } from "@features/catalog/ui";
import CatalogModel from "@features/catalog/model";
import { Empty } from "@shared/ui";

import LaptopIcon from "@assets/svg/laptop-icon.svg";

const Laptops: FC = observer(() => {

	useEffect(() => {
		if (!CatalogModel.loading) {
			CatalogModel.getLaptops();
		}
	}, []);

	return (
		<>
			{CatalogModel.laptops.length ? (
				<Catalog title="Ноутбуки" products={CatalogModel.laptops} />
			) : (
				<Empty
					icon={LaptopIcon}
					title="На данный момент товаров нет"
					description="Следите за обновлениями, чтобы не пропустить новые товары"
				/>
			)}
		</>
	);
});

export { Laptops };
