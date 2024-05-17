import { FC } from "react";
import { useNavigate } from "react-router-dom";
import { observer } from "mobx-react-lite";
import { Button, Image } from "@nextui-org/react";

import FavouritesModel from "../../model";
import { isAuth } from "@shared/lib";

import FavouriteFullIcon from "@assets/svg/favourite-full-icon.svg";
import FavouriteIcon from "@assets/svg/favourite-icon.svg";

interface ILikeButton {
	product_id: number;
	is_favourite: boolean;
}

const LikeButton: FC<ILikeButton> = observer(({ product_id, is_favourite }) => {
	const navigate = useNavigate();

	const handleLike = async () => {
		if (!isAuth()) {
			navigate("/auth");
		} else {
			if (is_favourite) {
				await FavouritesModel.deleteFavourites(product_id);
			} else {
				await FavouritesModel.addFavourites(product_id);
			}
			await FavouritesModel.getFavourites();
		}
	};

	return (
		<Button
			isIconOnly
			disableAnimation={true}
			color="primary"
			variant="light"
			aria-label="like"
			onClick={handleLike}
		>
			<Image
				className="small-action-btn"
				src={is_favourite ? FavouriteFullIcon : FavouriteIcon}
				alt="favourite"
			/>
		</Button>
	);
});

export { LikeButton };
