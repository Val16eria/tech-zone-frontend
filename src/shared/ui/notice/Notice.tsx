import { FC } from "react";
import { Image } from "@nextui-org/react";

import "./Notice.scss";

interface INotice {
	icon: string;
	title: string;
	description?: string;
}

const Notice: FC<INotice> = ({ icon, title, description }) => {
	return (
		<div className="notice flex-column remark-container">
			<Image className="notice__img" src={icon} alt={title} />
			<div className="notice__description flex-column">
				<p className="notice__description_title">{title}</p>
				{description && <p className="notice__description_txt">{description}</p>}
			</div>
		</div>
	)
};

export { Notice };
