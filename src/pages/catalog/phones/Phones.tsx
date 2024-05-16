import { FC, useEffect } from "react";
import { observer } from "mobx-react-lite";

import { Catalog } from "@features/catalog/ui";
import CatalogModel from "@features/catalog/model";

import PhoneIcon from "@assets/svg/smartphone-icon.svg";

const Phones: FC = observer(() => {
	useEffect(() => {
		CatalogModel.getPhones();
	}, []);


	return (
		<Catalog
			title="Смартфоны"
			icon={PhoneIcon}
			products={CatalogModel.phones}
		/>
	);
});

export { Phones };
