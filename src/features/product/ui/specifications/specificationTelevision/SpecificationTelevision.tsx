import { FC } from "react";
import { observer } from "mobx-react-lite";

import { SpecificationItem } from "../specificationItem";
import { ISpecification } from "../../../lib";
import ProductModel from "@features/product/model";
import { ITelevisions } from "@shared/api";
import { booleanToString, dateFormat } from "@shared/lib";

const SpecificationTelevision: FC = observer(() => {
	const product = ProductModel.product as ITelevisions;

	const Television: ISpecification[] = [
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
				label: "Вес, кг",
				value: product.weight,
			},
			{
				label: "Комплектация",
				value: product.equipment,
			},
			{
				label: "Потребление, Вт",
				value: product.consumption,
			},
			{
				label: "HDMI порты",
				value: booleanToString(product.hdmi_ports),
			},
			{
				label: "Цифровые тюнеры",
				value: product.codecs,
			},
			{
				label: "Количество usb портов",
				value: product.usb_ports,
			},
			{
				label: "Управление со смартфона",
				value: booleanToString(product.smartphone_control),
			},
			{
				label: "Управление через BlueTooth",
				value: booleanToString(product.smartphone_control),
			},
			{
				label: "Приложение для управления",
				value: product.management_application,
			},
			{
				label: "WiFi",
				value: booleanToString(product.wifi_availability),
			},
			{
				label: "Стандарт WiFi",
				value: product.wifi_standard,
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
				value: booleanToString(product.hdr_support),
			},
			{
				label: "Угол обзора",
				value: product.angle_view,
			}],
		},
		{
			title: "Звук",
			points: [{
				label: "Мощность звука",
				value: product.sound_power,
			},
			{
				label: "Технология звука",
				value: product.sound_technology,
			},
			{
				label: "Разьем для наушников",
				value: booleanToString(product.headphone_output),
			},
			{
				label: "Голосовой помощник",
				value: product.voice_assistant,
			},
			{
				label: "Сабвуфер",
				value: booleanToString(product.subwoofer),
			},
			{
				label: "Объемное звучание",
				value: booleanToString(product.sound_surround),
			}],
		},
		{
			title: "Память",
			points: [{
				label: "Оперативная память, в ГБ",
				value: product.memory_ram,
			},
			{
				label: "Встроенная память, в ГБ",
				value: product.memory,
			}],
		}
	];

	return (
		<div className="gap-10 flex-column">
			{Television.map((item) => (
				<SpecificationItem key={item.title} specification={item} />
			))}
		</div>
	);
});

export { SpecificationTelevision };
