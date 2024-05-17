import { FC, useEffect } from "react";
import { observer } from "mobx-react-lite";

import FavouritesModel from "@features/favourites/model";
import {
	Empty,
	Loader,
	ProductCard,
	Section
} from "@shared/ui";
import { WithAuth } from "@shared/hoc";

import FavouritesIcon from "@assets/svg/favourite-icon.svg";
import "./Favourites.scss";

const Favourites: FC = WithAuth(observer(() => {
	const { favourites, loading } = FavouritesModel;

	useEffect(() => {
		FavouritesModel.getFavourites();
	}, []);

	if (loading) {
		return <Loader />;
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
				<Empty
					icon={FavouritesIcon}
					title="У вас пока нет избранных товаров"
					description="Добавьте товары в избранное"
				/>
			)}
		</Section>
	);
}));

export { Favourites };
