import { FC, useEffect } from "react";
import { observer } from "mobx-react-lite";

import { Catalog } from "@features/catalog/ui";
import CatalogModel from "@features/catalog/model";
import { Empty } from "@shared/ui";

import PhoneIcon from "@assets/svg/smartphone-icon.svg";

const Phones: FC = observer(() => {

	useEffect(() => {
		if (!CatalogModel.loading) {
			CatalogModel.getPhones();
		}
	}, []);

	return (
		<>
			{CatalogModel.phones.length ? (
				<Catalog title="Смартфоны" products={CatalogModel.phones} />
			) : (
				<Empty
					icon={PhoneIcon}
					title="На данный момент товаров нет"
					description="Следите за обновлениями, чтобы не пропустить новые товары"
				/>
			)}
		</>
	);
});

export { Phones };
