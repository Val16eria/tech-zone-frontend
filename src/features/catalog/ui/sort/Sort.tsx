import { FC, ChangeEvent } from "react";
import { Select, SelectItem } from "@nextui-org/react";

import { SortTypes } from "../../lib";

import "./Sort.scss";

interface ISort {
	selectedSort: string;
	setSelectedSort: (selectedValue: string) => void;
}

const Sort: FC<ISort> = ({ selectedSort, setSelectedSort }) => {
	const handleSelectionChange = (e: ChangeEvent<HTMLSelectElement>) => {
		const selectedValue = e.target.value;
		if (!selectedValue) {
			return;
		}
		setSelectedSort(selectedValue);
	};

	return (
		<Select
			size="sm"
			color="primary"
			aria-label="sort"
			variant="bordered"
			selectedKeys={[selectedSort]}
			onChange={handleSelectionChange}
		>
			{SortTypes.map((type) => (
				<SelectItem key={type.value} value={type.value}>
					{type.label}
				</SelectItem>
			))}
		</Select>
	);
};

export { Sort };
