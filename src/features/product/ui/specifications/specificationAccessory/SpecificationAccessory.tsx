import { FC } from "react";
import { observer } from "mobx-react-lite";

import { SpecificationItem } from "../specificationItem";
import { ISpecification } from "../../../lib";
import ProductModel from "@features/product/model";
import { IAccessories } from "@shared/api";

const SpecificationAccessory: FC = observer(() => {
	const product = ProductModel.product as IAccessories;

	const Accessory: ISpecification[] = [
		{
			title: "Заводские данные о товаре",
			points: [{
				label: "Модель",
				value: product.model,
			},
				{
					label: "Код товара",
					value: product.id,
				}],
		},
		{
			title: "Основные характеристики",
			points: [{
				label: "Цвет товара",
				value: product.color_main,
			},
				{
					label: "Материал",
					value: product.material,
				},
				{
					label: "Вес, кг",
					value: product.weight,
				},
				{
					label: "Комплектация",
					value: product.equipment,
				},
				{
					label: "Особенности",
					value: product.features,
				}],
		},
		{
			title: "Размеры",
			points: [{
				label: "Высота, в миллиметрах",
				value: product.height,
			},
				{
					label: "Длина, в миллиметрах",
					value: product.width,
				},
				{
					label: "Толщина, в миллиметрах",
					value: product.thickness,
				}],
		}
	];

	return (
		<div className="gap-10 flex-column">
			{Accessory.map((item) => (
				<SpecificationItem key={item.title} specification={item} />
			))}
		</div>
	);
});

export { SpecificationAccessory };
