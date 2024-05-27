import { FC, useState } from "react";
import { observer } from "mobx-react-lite";
import { Tabs, Tab } from "@nextui-org/react";

import ProductModel from "@features/product/model";
import { Feedback } from "@features/product/ui";
import {
	SpecificationAccessory,
	SpecificationLaptop,
	SpecificationPhone,
	SpecificationSmartWatch,
	SpecificationTablet,
	SpecificationTelevision
} from "../specifications";
import { Notice } from "@shared/ui";

import ReviewIcon from "@assets/svg/review-blue-icon.svg";
import "./DescriptionTabs.scss";

const DescriptionTabs: FC = observer(() => {
	const [selected, setSelected] = useState("reviews");
	const { product } = ProductModel;

	return (
		<div className="description-tabs flex-column">
			<Tabs
				className="description-tabs__tab"
				aria-label="Options"
				color="primary"
				selectedKey={selected}
				variant="underlined"
				size="lg"
				onSelectionChange={(select) => setSelected(select.toString())}
			>
				<Tab key="reviews" title={`Отзывы ${product?.reviews.length}`}>
					{product?.reviews.length ?
						<Feedback reviews={product.reviews} /> :
						<Notice icon={ReviewIcon} title="Отзывов нет" />
					}
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
