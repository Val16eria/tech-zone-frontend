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
	const [selectedCheckboxes, setSelectedCheckboxes] = useState<SelectedCheckboxes>(() => {
		const storedFilters = sessionStorage.getItem("filter");
		return storedFilters ? JSON.parse(storedFilters) : {};
	});

	useEffect(() => {
		if (filters?.price) {
			setMinPrice(filters.price.min);
			setMaxPrice(filters.price.max);
		}
	}, [filters]);

	useEffect(() => {
		sessionStorage.setItem("filter", JSON.stringify(selectedCheckboxes));
	}, [selectedCheckboxes]);

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

	const handlePriceRangeChange = useCallback((values: string[]) => {
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

		const priceRangeKey = filters?.price.id || "price";
		setSelectedCheckboxes((prevSelected) => {
			const updatedCheckboxes = { ...prevSelected, [priceRangeKey]: values };
			if (values.length === 0) {
				delete updatedCheckboxes[priceRangeKey];
			}
			return updatedCheckboxes;
		});
	}, [filters]);

	const handleCheckboxChange = useCallback((filterId: string) => (selectedValues: string[]) => {
		setSelectedCheckboxes((prevSelected) => {
			const updatedCheckboxes = { ...prevSelected, [filterId]: selectedValues };
			if (selectedValues.length === 0) {
				delete updatedCheckboxes[filterId];
			}
			return updatedCheckboxes;
		});
	}, []);

	const onSubmit = useCallback(() => {
		const filtersToSubmit: { [key: string]: number | null | string } = {
			price_gte: minPrice,
			price_lte: maxPrice,
		};

		Object.keys(selectedCheckboxes).forEach((filterId) => {
			if (filterId === "price") {
				return;
			}

			const key = filterId === "price_gte" || filterId === "price_lte" ? filterId : `${filterId}_in`;
			const result = selectedCheckboxes[filterId]
				.map((item) => isNaN(Number(item)) ? item : Number(item));
			filtersToSubmit[key] = JSON.stringify(result);
		});

		setSelectedFilters(filtersToSubmit);
		window.scrollTo(0, 0);
	}, [minPrice, maxPrice, selectedCheckboxes, setSelectedFilters]);

	const getVariantValue = useCallback((variant: IFilterVariantsPrice) => {
		return JSON.stringify([
			variant.min ?? filters?.price.min,
			variant.max ?? filters?.price.max
		]);
	}, [filters]);

	const resetFilters = useCallback(() => {
		setMinPrice(filters?.price.min ?? null);
		setMaxPrice(filters?.price.max ?? null);

		setSelectedCheckboxes({});
	}, [filters]);

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
									variant="bordered"
									size="sm"
									color="primary"
									placeholder={filters.price.label_min}
									value={minPrice?.toString() || ""}
									onChange={handleMinPriceChange}
								/>
								<Input
									className="filter__options_slider-input"
									variant="bordered"
									size="sm"
									color="primary"
									placeholder={filters.price.label_max}
									value={maxPrice?.toString() || ""}
									onChange={handleMaxPriceChange}
								/>
							</div>
							{minPrice !== null && maxPrice !== null && (
								<Slider
									aria-label="slider"
									size="md"
									step={1}
									maxValue={filters.price.max}
									minValue={filters.price.min}
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
						<CheckboxGroup
							value={selectedCheckboxes[filters?.price.id || "price"] || []}
							onValueChange={(values) => {
								handlePriceRangeChange(values);
								handleCheckboxChange(filters?.price.id || "price")(values);
							}}
						>
							{filters.price.variants && filters.price.variants.map((variant) => (
								<Checkbox key={variant.label} value={getVariantValue(variant)}>
									{variant.label}
								</Checkbox>
							))}
						</CheckboxGroup>
					</div>
				</AccordionItem>
				{filters.product_filters && filters.product_filters.map((filter) => (
					<AccordionItem key={filter.id} title={filter.label}>
						<CheckboxGroup value={selectedCheckboxes[filter.id] || []} onValueChange={handleCheckboxChange(filter.id)}>
							{filter.variants.map((variant) => (
								<Checkbox key={variant} value={variant?.toString()}>
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
