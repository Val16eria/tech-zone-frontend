import { FC } from "react";

import "./Favourites.scss";
import { Section } from "@shared/ui";

const Favourites: FC = () => {
	return (
		<Section title="Избранное" isBreadcrumbs={true}>
			<p>favourites</p>
		</Section>
	);
};

export { Favourites };
