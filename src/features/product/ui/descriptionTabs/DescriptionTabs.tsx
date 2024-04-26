import { FC, useState } from "react";
import { observer } from "mobx-react-lite";
import { Tabs, Tab } from "@nextui-org/react";

import ProductModel from "@features/product/model";
import { Feedback } from "@features/product/ui";
import { Empty } from "@shared/ui";

import "./DescriptionTabs.scss";

const DescriptionTabs: FC = observer(() => {
	const [selected, setSelected] = useState("reviews");

	if (!ProductModel.product) {
		return <Empty icon={""} title="Нет отзывов" />
	}

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
					<Feedback reviews={ProductModel.product.reviews} />
				</Tab>

				<Tab key="specifications" title="Характеристики">
					<p>характеристики</p>
				</Tab>
			</Tabs>
		</div>
	);
});

export { DescriptionTabs };
