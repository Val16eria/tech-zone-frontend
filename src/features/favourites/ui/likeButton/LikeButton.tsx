import { FC, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button, Image } from "@nextui-org/react";

import FavouritesModel from "../../model";
import { isAuth } from "@shared/lib";

import FavouriteFullIcon from "@assets/svg/favourite-full-icon.svg";
import FavouriteIcon from "@assets/svg/favourite-icon.svg";
import "./LikeButton.scss";

interface ILikeButton {
	product_id: number;
	is_favourite: boolean;
}

const LikeButton: FC<ILikeButton> = ({ product_id, is_favourite }) => {
	const navigate = useNavigate();
	const [isLike, setLike] = useState(is_favourite);

	const handleLike = async () => {
		if (!isAuth()) {
			navigate("/auth");
		} else {
			if (isLike) {
				FavouritesModel.deleteFavourites(product_id)
					.then(() => setLike((prevState) => !prevState));
			} else {
				FavouritesModel.addFavourites(product_id)
					.then(() => setLike((prevState) => !prevState));
			}
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
				className="like-button__img"
				src={isLike ? FavouriteFullIcon: FavouriteIcon}
				alt="favourite"
			/>
		</Button>
	);
};

export { LikeButton };
