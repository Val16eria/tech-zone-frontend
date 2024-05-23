import { FC } from "react";
import { useNavigate } from "react-router-dom";
import { observer } from "mobx-react-lite";
import { Button, Image } from "@nextui-org/react";

import FavouritesModel from "../../model";
import { isAuth } from "@shared/lib";

import FavouriteFullIcon from "@assets/svg/favourite-full-icon.svg";
import FavouriteIcon from "@assets/svg/favourite-icon.svg";

interface ILikeButton {
	id_product: number;
}

const LikeButton: FC<ILikeButton> = observer(({ id_product }) => {
	const navigate = useNavigate();
	const isLike = FavouritesModel.favourites.some(item => item.product.id === id_product);

	const handleLike = async () => {
		if (!isAuth()) {
			navigate("/auth");
		} else {
			if (isLike) {
				await FavouritesModel.deleteFavourites(id_product);
			} else {
				await FavouritesModel.addFavourites(id_product);
			}
			await FavouritesModel.getFavourites();
		}
	};

	return (
		<Button
			className="small-action-btn"
			isIconOnly
			disableAnimation={true}
			color="primary"
			variant="light"
			aria-label="like"
			onClick={handleLike}
		>
			<Image
				src={isLike ? FavouriteFullIcon : FavouriteIcon}
				alt="favourite"
			/>
		</Button>
	);
});

export { LikeButton };
