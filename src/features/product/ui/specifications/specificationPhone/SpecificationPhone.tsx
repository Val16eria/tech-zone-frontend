import { FC } from "react";
import { observer } from "mobx-react-lite";

import { SpecificationItem } from "../specificationItem";
import { ISpecification } from "../../../lib";
import ProductModel from "@features/product/model";
import { IPhones } from "@shared/api";
import { booleanToString, dateFormat } from "@shared/lib";

const SpecificationPhone: FC = observer(() => {
	const product = ProductModel.product as IPhones;

	const Phone: ISpecification[] = [
		{
			title: "Заводские данные о товаре",
			points: [{
				label: "Модель",
				value: product.model,
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
				label: "Вес, кг",
				value: product.weight,
			},
			{
				label: "Комплектация",
				value: product.equipment,
			},
			{
				label: "Сенсоры",
				value: product.sensors,
			}],
		},
		{
			title: "Питание",
			points: [{
				label: "Быстрая зарядка (Fast-charge)",
				value: booleanToString(product.fast_charge),
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
			title: "Память и процессор",
			points: [{
				label: "Оперативная память, в ГБ",
				value: product.memory_ram,
			},
			{
				label: "Встроенная память, в ГБ",
				value: product.memory,
			},
			{
				label: "Модуль процессора",
				value: product.processor_model,
			},
			{
				label: "Частота процессора",
				value: product.processor_frequency,
			},
			{
				label: "Количество ядер процессора",
				value: product.number_cores,
			}],
		},
		{
			title: "Размеры",
			points: [{
				label: "Высота, в миллиметрах",
				value: product.width,
			},
			{
				label: "Длина, в миллиметрах",
				value: product.height,
			},
			{
				label: "Толщина, в миллиметрах",
				value: product.thickness,
			}],
		},
		{
			title: "Экран",
			points: [{
				label: "Разрешение экрана",
				value: product.screen_resolution,
			},
			{
				label: "Диагональ ээкрана, в дюймах",
				value: product.screen_diagonal,
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
				label: "Плотность пикселей",
				value: product.pixel_density,
			},
			{
				label: "Яркость экрана",
				value: product.matrix_brightness,
			}],
		},
		{
			title: "Связь",
			points: [{
				label: "Поддержка Lte",
				value: booleanToString(product.support_lte),
			},
			{
				label: "Стандарт коммуникации",
				value: product.communication_standard,
			},
			{
				label: "Формат сим-карты",
				value: product.sim_card_format,
			},
			{
				label: "Количество сим-карт",
				value: product.sim_card_number,
			},
			{
				label: "Технология звука",
				value: product.sound_technology,
			},
			{
				label: "Разъем для наушников",
				value: booleanToString(product.headphone_output),
			}],
		},
		{
			title: "Камера",
			points: [{
				label: "Количество основных ядер",
				value: product.number_cameras,
			},
			{
				label: "Разрешение основной камеры",
				value: product.camera_quality,
			},
			{
				label: "Разрешение фронтальной камеры",
				value: product.front_camera_quality,
			},
			{
				label: "Максимальное разрешение записи видео",
				value: product.video_format,
			},
			{
				label: "Стабилизация видео",
				value: booleanToString(product.optical_stabilization),
			}],
		}
	];

	return (
		<div className="gap-10 flex-column">
			{Phone.map((item) => (
				<SpecificationItem key={item.title} specification={item} />
			))}
		</div>
	);
});

export { SpecificationPhone };
