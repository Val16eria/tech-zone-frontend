import { FC } from "react";
import { observer } from "mobx-react-lite";

import { SpecificationItem } from "../specificationItem";
import { ISpecification } from "../../../lib";
import ProductModel from "@features/product/model";
import { ISmartWatches } from "@shared/api";
import { dateFormat } from "@shared/lib";

const SpecificationSmartWatch: FC = observer(() => {
	const product = ProductModel.product as ISmartWatches;

	const SmartWatch: ISpecification[] = [
		{
			title: "Заводские данные о товаре",
			points: [{
				label: "Модель",
				value: product.model
			},
			{
				label: "Код товара",
				value: product.id,
			},
			{
				label: "Дата выпуска",
				value: dateFormat(product.date_release),
			}],
		},
		{
			title: "Основные характеристики",
			points: [{
				label: "Цвет товара",
				value: product.color_main,
			},
			{
				label: "Операционная система",
				value: product.operating_system,
			},
			{
				label: "Материал корпуса",
				value: product.material,
			},
			{
				label: "Дополнительный цвет товара",
				value: product.color_other,
			},
			{
				label: "Степень защиты",
				value: product.degree_protection,
			},
			{
				label: "Тип корпуса",
				value: product.material,
			},
			{
				label: "Вес, кг",
				value: product.weight,
			},
			{
				label: "Материал ремешка",
				value: product.material_belt,
			},
			{
				label: "Комплектация",
				value: product.equipment,
			},
			{
				label: "Технология звука",
				value: product.sound_technology,
			},
			{
				label: "Выход для наушников",
				value: product.headphone_output,
			},
			{
				label: "Защита от влаги",
				value: product.water_resistance,
			}],
		},
		{
			title: "Питание",
			points: [{
				label: "Быстрая зарядка (Fast-charge)",
				value: product.fast_charge,
			},
			{
				label: "Тип батареи",
				value: product.accumulator_type,
			},
			{
				label: "Вместительность батареи",
				value: product.accumulator_capacity,
			}],
		},
		{
			title: "Экран",
			points: [{
				label: "Разрешение экрана",
				value: product.screen_resolution,
			},
			{
				label: "Диагональ экрана, в дюймах",
				value: product.screen_diagonal,
			},
			{
				label: "Формат экрана",
				value: product.screen_format,
			},
			{
				label: "Тип экрана",
				value: product.matrix_type,
			},
			{
				label: "Частота экрана",
				value: product.matrix_frequency,
			},
			{
				label: "Яркость экрана",
				value: product.matrix_brightness,
			},
			{
				label: "Плотность пикселей",
				value: product.pixel_density,
			}],
		},
		{
			title: "Размеры",
			points: [{
				label: "Высота, в сантиметрах",
				value: product.height,
			},
			{
				label: "Длина, в сантиметрах",
				value: product.width,
			},
			{
				label: "Толщина, в сантиметрах",
				value: product.thickness,
			}],
		},
		{
			title: "Память",
			points: [{
				label: "Встроенная память, в ГБ",
				value: product.memory,
			},
			{
				label: "Оперативная память, в ГБ",
				value: product.memory_ram,
			}],
		}
	];
	return (
		<div className="gap-10 flex-column">
			{SmartWatch.map((item) => (
				<SpecificationItem key={item.title} specification={item} />
			))}
		</div>
	);
});

export { SpecificationSmartWatch };
