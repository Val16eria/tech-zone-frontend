import { FC, useState } from "react";
import { observer } from "mobx-react-lite";
import { Tabs, Tab } from "@nextui-org/react";

import ProductModel from "@features/product/model";
import { Feedback } from "@features/product/ui";
import { Empty } from "@shared/ui";
import {
	SpecificationAccessory,
	SpecificationLaptop,
	SpecificationPhone,
	SpecificationSmartWatch,
	SpecificationTablet,
	SpecificationTelevision
} from "../specifications";

import "./DescriptionTabs.scss";

const DescriptionTabs: FC = observer(() => {
	const [selected, setSelected] = useState("reviews");
	const product = ProductModel.product;

	if (!product) {
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
					<Feedback reviews={product.reviews} />
				</Tab>

				<Tab key="specifications" title="Характеристики">
					{ProductModel.productType === "smartphone" && <SpecificationPhone />}
					{ProductModel.productType === "laptop" && <SpecificationLaptop />}
					{ProductModel.productType === "tablet" && <SpecificationTablet />}
					{ProductModel.productType === "smartwatch" && <SpecificationSmartWatch />}
					{ProductModel.productType === "accessory" && <SpecificationAccessory />}
					{ProductModel.productType === "television" && <SpecificationTelevision />}
				</Tab>
			</Tabs>
		</div>
	);
});

export { DescriptionTabs };
