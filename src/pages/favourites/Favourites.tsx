import { FC } from "react";
import { observer } from "mobx-react-lite";

import FavouritesModel from "@features/favourites/model";
import {
	ErrorNotice, Loader,
	Notice,
	ProductCard,
	Section
} from "@shared/ui";
import { WithAuth } from "@shared/hoc";

import FavouritesIcon from "@assets/svg/favourite-icon.svg";
import "./Favourites.scss";

const Favourites: FC = WithAuth(observer(() => {
	const { favourites, loading, error } = FavouritesModel;

	if (loading) {
		return <Loader />;
	}

	if (error) {
		return <ErrorNotice />;
	}

	return (
		<Section title="Избранное" isBreadcrumbs={true}>
			{favourites.length ? (
				<div className="favourites">
					{favourites.map((product) =>
						<ProductCard key={product.product.id} {...product.product} />
					)}
				</div>
			) : (
				<Notice
					icon={FavouritesIcon}
					title="У вас пока нет избранных товаров"
					description="Добавьте товары в избранное"
				/>
			)}
		</Section>
	);
}));

export { Favourites };
