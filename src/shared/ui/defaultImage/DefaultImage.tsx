import { FC } from "react";
import { Image } from "@nextui-org/react";

import DefaultIcon from "@assets/svg/defaultImage.svg";
import "./DefaultImage.scss";

const DefaultImage: FC = () => {
	return (
		<div className="default-image">
			<Image
				radius="none"
				src={DefaultIcon}
			/>
		</div>
	);
};

export { DefaultImage };
