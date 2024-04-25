import { FC, useState } from "react";
import { Tabs, Tab } from "@nextui-org/react";

import "./DescriptionTabs.scss";
import { Review } from "../review";

const DescriptionTabs: FC = () => {
	const [selected, setSelected] = useState("reviews");

	return (
		<div className="description-tabs">
			<Tabs
				aria-label="Options"
				selectedKey={selected}
				variant="underlined"
				size="lg"
				onSelectionChange={(select) => setSelected(select.toString())}
			>

				<Tab key="reviews" title="Отзывы">
					<Review />
				</Tab>

				<Tab key="specifications" title="Характеристики">
					<p>характеристики</p>
				</Tab>
			</Tabs>
		</div>
	);
};

export { DescriptionTabs };
