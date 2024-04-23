import { FC, useEffect } from "react";
import { observer } from "mobx-react-lite";

import { Catalog } from "@features/catalog/ui";
import CatalogModel from "@features/catalog/model";

import LaptopIcon from "@assets/svg/laptop-icon.svg";

const Laptops: FC = observer(() => {

	useEffect(() => {
		if (!CatalogModel.loading) {
			CatalogModel.getLaptops();
		}
	}, []);

	return (
		<Catalog
			title="Ноутбуки"
			icon={LaptopIcon}
			products={CatalogModel.laptops}
		/>
	);
});

export { Laptops };
