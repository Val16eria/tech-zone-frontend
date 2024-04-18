import { FC, useState } from "react";
import {
	Accordion,
	AccordionItem,
	Button,
	Checkbox,
	CheckboxGroup,
	Input,
	Slider
} from '@nextui-org/react';

import "./Filter.scss";

const Filter: FC = () => {
	const [minPrice, setMinPrice] = useState<number>(10000);
	const [maxPrice, setMaxPrice] = useState<number>(100000);

	const handleMinPriceChange = (value: string) => {
		const min = value === "" ? 0 : parseInt(value);
		if (!isNaN(min)) {
			setMinPrice(min);
		}
	};

	const handleMaxPriceChange = (value: string) => {
		const max = value === "" ? 0 : parseInt(value);
		if (!isNaN(max)) {
			setMaxPrice(max);
		}
	};

	return (
		<div className="filter flex-column">
			<Accordion
				showDivider={false}
				selectionMode="multiple"
				defaultExpandedKeys={["price", "brand", "color", "screen_resolution", "screen_diagonal"]}
			>
				<AccordionItem title="Цена" key="price">
					<div className="filter__price flex-column">
						<div className="filter__price_options flex-column">
							<div className="filter__options_slider flex-row">
								<Input
									className="filter__options_slider-input"
									isInvalid={minPrice >= maxPrice}
									variant="bordered"
									size="sm"
									color="primary"
									value={minPrice.toString()}
									onChange={(event) => handleMinPriceChange(event.target.value)}
								/>
								<Input
									className="filter__options_slider-input"
									isInvalid={maxPrice <= minPrice}
									variant="bordered"
									size="sm"
									color="primary"
									value={maxPrice.toString()}
									onChange={(event) => handleMaxPriceChange(event.target.value)}
								/>
							</div>

							<Slider
								aria-label="slider"
								size="md"
								step={100}
								maxValue={100000}
								minValue={10000}
								value={[minPrice, maxPrice]}
								onChange={value => {
									if (Array.isArray(value)) {
										const [min, max] = value;
										setMinPrice(min);
										setMaxPrice(max);
									}
								}}
							/>
						</div>

						<CheckboxGroup>
							<Checkbox value="Менее 15 000 ₽">Менее 15 000 ₽</Checkbox>
							<Checkbox value="15 000 - 24 999 ₽">15 000 - 24 999 ₽</Checkbox>
							<Checkbox value="25 000 - 39 999 ₽">25 000 - 39 999 ₽</Checkbox>
							<Checkbox value="40 000 - 59 999 ₽">40 000 - 59 999 ₽</Checkbox>
							<Checkbox value="60 000 - 99 999 ₽">60 000 - 99 999 ₽</Checkbox>
							<Checkbox value="Более 99 999 ₽">Более 99 999 ₽</Checkbox>
						</CheckboxGroup>
					</div>
				</AccordionItem>
				<AccordionItem title="Бренд" key="brand">
					<CheckboxGroup>
						<Checkbox value="Samsung">Samsung</Checkbox>
						<Checkbox value="Xiaomi">Xiaomi</Checkbox>
						<Checkbox value="LG">LG</Checkbox>
						<Checkbox value="Haier">Haier</Checkbox>
					</CheckboxGroup>
				</AccordionItem>
				<AccordionItem title="Цвет" key="color">
					<CheckboxGroup>
						<Checkbox value="Черный">Черный</Checkbox>
						<Checkbox value="Белый">Белый</Checkbox>
					</CheckboxGroup>
				</AccordionItem>
				<AccordionItem title="Разрешение экрана" key="screen_resolution">
					<CheckboxGroup>
						<Checkbox value="QLED-телевизоры">QLED-телевизоры</Checkbox>
						<Checkbox value="OLED-телевизоры">OLED-телевизоры</Checkbox>
						<Checkbox value="Smart TV">Smart TV</Checkbox>
						<Checkbox value="4K UHD">4K UHD</Checkbox>
					</CheckboxGroup>
				</AccordionItem>
				<AccordionItem title="Диагональ экрана" key="screen_diagonal">
					<CheckboxGroup>
						<Checkbox value='19"-27" (48-69 см)'>19"-27" (48-69 см)</Checkbox>
						<Checkbox value='28"-32" (71-81 см)'>28"-32" (71-81 см)</Checkbox>
						<Checkbox value='37"-43" (94-109 см)'>37"-43" (94-109 см)</Checkbox>
						<Checkbox value='45"-52" (114-132 см)'>45"-52" (114-132 см)</Checkbox>
						<Checkbox value='55"-60" (140-152 см)'>55"-60" (140-152 см)</Checkbox>
					</CheckboxGroup>
				</AccordionItem>
			</Accordion>

			<div className="filter__actions flex-column">
				<Button
					variant="solid"
					color="primary"
					fullWidth={true}
				>
					Применить
				</Button>

				<Button
					variant="light"
					color="primary"
					fullWidth={true}
				>
					Сбросить фильтры
				</Button>
			</div>
		</div>
	);
};

export { Filter };

