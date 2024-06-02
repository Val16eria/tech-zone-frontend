import {
	FC,
	ChangeEvent,
	useState,
	useEffect,
	useCallback
} from "react";
import { observer } from "mobx-react-lite";
import {
	AccordionItem,
	Accordion,
	Button,
	Checkbox,
	CheckboxGroup,
	Input,
	Slider,
} from "@nextui-org/react";

import { IFilter as ProductFilter, IFilterVariantsPrice } from "@shared/api";

import "./Filter.scss";

interface SelectedCheckboxes {
	[key: string]: string[];
}

interface IFilter {
	filters: ProductFilter | null;
	setSelectedFilters: (selectedValue: object) => void;
}

const Filter: FC<IFilter> = observer(({ filters, setSelectedFilters }) => {
	const [minPrice, setMinPrice] = useState<number | null>(null);
	const [maxPrice, setMaxPrice] = useState<number | null>(null);
	const [selectedCheckboxes, setSelectedCheckboxes] = useState<SelectedCheckboxes>({});

	useEffect(() => {
		if (filters?.price) {
			setMinPrice(filters.price.min);
			setMaxPrice(filters.price.max);
		}
	}, [filters]);

	const handleMinPriceChange = useCallback((event: ChangeEvent<HTMLInputElement>) => {
		const min = event.target.value === "" ? 0 : parseInt(event.target.value);
		if (!isNaN(min)) {
			setMinPrice(min);
		}
	}, []);

	const handleMaxPriceChange = useCallback((event: ChangeEvent<HTMLInputElement>) => {
		const max = event.target.value === "" ? 0 : parseInt(event.target.value);
		if (!isNaN(max)) {
			setMaxPrice(max);
		}
	}, []);

	const handlePriceRangeChange = (values: string[]) => {
		const selectedVariants = values.map(value => JSON.parse(value) as [number, number]);

		const flatSelectedVariants = selectedVariants.flat();
		let newMinPrice: number | null;
		let newMaxPrice: number | null;

		if (flatSelectedVariants.length) {
			newMinPrice = Math.min(...flatSelectedVariants.filter((_, i) => i % 2 === 0));
			newMaxPrice = Math.max(...flatSelectedVariants.filter((_, i) => i % 2 !== 0));
		} else {
			newMinPrice = filters?.price.min !== undefined ? filters.price.min : null;
			newMaxPrice = filters?.price.max !== undefined ? filters.price.max : null;
		}

		setMinPrice(newMinPrice);
		setMaxPrice(newMaxPrice);
	};

	const handleCheckboxChange = (filterId: string) => (selectedValues: string[]) => {
		setSelectedCheckboxes((prevSelected) => ({
			...prevSelected,
			[filterId]: selectedValues,
		}));
	};

	const onSubmit = () => {
		const filtersToSubmit: { [key: string]: number | null | string } = {
			price_gte: minPrice,
			price_lte: maxPrice,
		};

		Object.keys(selectedCheckboxes).forEach((filterId) => {
			const key = filterId === 'price_gte' || filterId === 'price_lte' ? filterId : `${filterId}_in`;
			filtersToSubmit[key] = JSON.stringify(selectedCheckboxes[filterId]);
		});

		setSelectedFilters(filtersToSubmit);
	};

	const getVariantValue = (variant: IFilterVariantsPrice) => {
		return JSON.stringify([
			variant.min ?? filters?.price.min,
			variant.max ?? filters?.price.max
		]);
	};

	const resetFilters = () => {
		setSelectedFilters({});
		setMinPrice(filters?.price.min ?? null);
		setMaxPrice(filters?.price.max ?? null);
		setSelectedCheckboxes({});
	};

	if (!filters?.product_filters || !filters?.price) {
		return null;
	}

	const productKeys = filters.product_filters.map((product) => product.id);

	return (
		<div className="filter flex-column">
			<Accordion
				showDivider={false}
				selectionMode="multiple"
				defaultExpandedKeys={[
					...productKeys,
					filters.price.id
				]}
			>
				<AccordionItem title={filters.price.label} key={filters.price.id}>
					<div className="filter__price flex-column">
						<div className="filter__price_options flex-column">
							<div className="filter__options_slider flex-row">
								<Input
									className="filter__options_slider-input"
									isInvalid={minPrice !== null && maxPrice !== null && minPrice >= maxPrice}
									variant="bordered"
									size="sm"
									color="primary"
									value={minPrice?.toString() || ""}
									onChange={handleMinPriceChange}
								/>
								<Input
									className="filter__options_slider-input"
									isInvalid={minPrice !== null && maxPrice !== null && maxPrice <= minPrice}
									variant="bordered"
									size="sm"
									color="primary"
									value={maxPrice?.toString() || ""}
									onChange={handleMaxPriceChange}
								/>
							</div>
							{minPrice !== null && maxPrice !== null && (
								<Slider
									aria-label="slider"
									size="md"
									step={100}
									maxValue={maxPrice}
									minValue={minPrice}
									value={[minPrice, maxPrice]}
									onChange={(value) => {
										if (Array.isArray(value)) {
											const [min, max] = value;
											setMinPrice(min);
											setMaxPrice(max);
										}
									}}
								/>
							)}
						</div>
						<CheckboxGroup onValueChange={handlePriceRangeChange}>
							{filters.price.variants.map((variant) => (
								<Checkbox key={variant.label} value={getVariantValue(variant)}>
									{variant.label}
								</Checkbox>
							))}
						</CheckboxGroup>
					</div>
				</AccordionItem>
				{filters.product_filters.map((filter) => (
					<AccordionItem key={filter.id} title={filter.label}>
						<CheckboxGroup value={selectedCheckboxes[filter.id] || []} onValueChange={handleCheckboxChange(filter.id)}>
							{filter.variants.map((variant, index) => (
								<Checkbox key={index} value={variant.toString()}>
									{variant}
								</Checkbox>
							))}
						</CheckboxGroup>
					</AccordionItem>
				))}
			</Accordion>
			<div className="filter__actions flex-column">
				<Button
					variant="solid"
					color="primary"
					fullWidth={true}
					onClick={onSubmit}
				>
					Применить
				</Button>
				<Button
					variant="light"
					color="primary"
					fullWidth={true}
					onClick={resetFilters}
				>
					Сбросить фильтры
				</Button>
			</div>
		</div>
	);
});

export { Filter };
