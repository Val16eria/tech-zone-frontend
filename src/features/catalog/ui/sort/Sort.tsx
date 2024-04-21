import {
	FC,
	useState,
	ChangeEvent
} from "react";
import { Select, SelectItem } from "@nextui-org/react";

import "./Sort.scss";

const Sort: FC = () => {
	const types = [
		{ label: "По популярности", value: "popular"},
		{ label: "С самой выоской оценкой", value: "high"},
		{ label: "С самой низкой оценкой", value: "low"},
		{ label: "Сначала дорогое", value: "expensive"},
		{ label: "Сначала дешевое", value: "cheap"},
	];

	const [value, setValue] = useState<string>(types[0].value);

	const handleSelectionChange = (e: ChangeEvent<HTMLSelectElement>) => {
		const selectedValue = e.target.value;
		if (!selectedValue) {
			return;
		}
		setValue(selectedValue);
	};

	return (
		<Select
			size="sm"
			color="primary"
			aria-label="sort"
			variant="bordered"
			selectedKeys={[value]}
			onChange={handleSelectionChange}
		>
			{types.map((animal) => (
				<SelectItem key={animal.value} value={animal.value}>
					{animal.label}
				</SelectItem>
			))}
		</Select>
	);
};

export { Sort };