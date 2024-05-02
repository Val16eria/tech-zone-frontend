import { FC, useEffect } from "react";
import { observer } from "mobx-react-lite";

import { Catalog } from "@features/catalog/ui";
import CatalogModel from "@features/catalog/model";

import TelevisionIcon from "@assets/svg/tv-icon.svg";

const Televisions: FC = observer(() => {

	useEffect(() => {
		if (!CatalogModel.loading) {
			CatalogModel.getTelevisions();
		}
	}, []);

	return (
		<Catalog
			title="Телевизоры"
			icon={TelevisionIcon}
			products={CatalogModel.televisions}
		/>
	);
});

export { Televisions };
