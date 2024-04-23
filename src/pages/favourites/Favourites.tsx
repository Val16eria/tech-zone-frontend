import { FC, useEffect } from "react";
import { observer } from "mobx-react-lite";

import FavouritesModel from "@features/favourites/model";
import {
	Empty,
	Loader,
	ProductCard,
	Section
} from "@shared/ui";
import FavouritesIcon from "@assets/svg/favourite-icon.svg";

import "./Favourites.scss";

const Favourites: FC = observer(() => {

	useEffect(() => {
		if (!FavouritesModel.loading) {
			FavouritesModel.getFavourites();
		}
	}, []);

	if (FavouritesModel.loading) {
		return <Loader />
	}

	return (
		<Section title="Избранное" isBreadcrumbs={true}>
			{FavouritesModel.favourites.length ?
				FavouritesModel.favourites.map((product) => (
					<div className="favourites"><ProductCard
						key={product.id} {...product} />
					</div>
				)) :
				<Empty
					icon={FavouritesIcon}
					title="У вас пока нет избранных товаров"
					description="Добавьте товары в избранное"
				/>
			}
		</Section>
	);
});

export { Favourites };
