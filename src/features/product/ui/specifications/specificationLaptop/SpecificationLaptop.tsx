import { FC } from "react";
import { observer } from "mobx-react-lite";

import { SpecificationItem } from "../specificationItem";
import { ISpecification } from "../../../lib";
import ProductModel from "@features/product/model";
import { ILaptops } from "@shared/api";

const SpecificationLaptop: FC = observer(() => {
	const product = ProductModel.product as ILaptops;

	const Laptop: ISpecification[] = [
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
				value: product.date_release,
			}],
		},
		{
			title: "Основные харакетристики",
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
				label: "Вес, кг",
				value: product.weight,
			},
			{
				label: "Максимальное время работы, ч",
				value: product.battery_life,
			},
			{
				label: "Потребление, Вт",
				value: product.consumption,
			},
			{
				label: "Комплектация",
				value: product.equipment,
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
			title: "Питание",
			points: [{
				label: "Встроенная память, в ГБ",
				value: product.memory,
			},
			{
				label: "Оперативная память, в ГБ",
				value: product.memory_ram,
			}]
		},
		{
			title: "Устройства ввода",
			points: [{
				label: "Раскладка клавиатуры",
				value: product.keyboard_layout,
			},
			{
				label: "Подсветка клавиатуры",
				value: product.keyboard_backlight,
			},
			{
				label: "Микрофон",
				value: product.microphone,
			},
			{
				label: "Голосовой ассистент",
				value: product.voice_assistant,
			},
			{
				label: "HDMI порты",
				value: product.hdmi_ports,
			},
			{
				label: "WiFi",
				value: product.wifi_availability,
			},
			{
				label: "Стандарт WiFi",
				value: product.wifi_standard,
			},
			{
				label: "Отпечаток пальца",
				value: product.fingerprint_scanner,
			},
			{
				label: "Тачпад",
				value: product.touchpad,
			},
			{
				label: "Разьем для наушников",
				value: product.headphone_output,
			},
			{
				label: "Технология звука",
				value: product.sound_technology,
			},
			{
				label: "Мощность звука",
				value: product.sound_power,
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
				label: "Поддержка HDR",
				value: product.hdr_support,
			}],
		},
		{
			title: "Графический ускоритель",
			points: [{
				label: "Вид графического ускорителя",
				value: product.type_graphics_accelerator,
			},
			{
				label: "Модель видеокарты",
				value: product.video_card_model,
			},
			{
				label: "Дискретная графическая модель",
				value: product.discrete_graphics,
			},
			{
				label: "Видеочип",
				value: product.video_chip,
			},
			{
				label: "Тип видеопамяти",
				value: product.video_memory_type,
			},
			{
				label: "Объем видеопамяти",
				value: product.video_memory,
			},
			{
				label: "Тактовая частота",
				value: product.clock_speed,
			}],
		}
	];

	return (
		<div className="gap-10 flex-column">
			{Laptop.map((item) => (
				<SpecificationItem key={item.title} specification={item} />
			))}
		</div>
	);
});

export { SpecificationLaptop };
