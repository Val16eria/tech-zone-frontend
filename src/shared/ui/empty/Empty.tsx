import { FC } from "react";
import { Image } from "@nextui-org/react";

import "./Empty.scss";

interface IEmpty {
	icon: string;
	title: string;
	description?: string;
}

const Empty: FC<IEmpty> = ({ icon, title, description }) => {
	return (
		<div className="empty flex-column remark-container">
			<Image className="empty__img" src={icon} alt={title} />
			<div className="empty__description flex-column">
				<p className="empty__description_title">{title}</p>
				{description && <p className="empty__description_txt">{description}</p>}
			</div>
		</div>
	)
};

export { Empty };
