import { FC } from "react";
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

	return (
		<Select
			className="sort"
			size="sm"
			defaultSelectedKeys={["popular"]}
			color="primary"
			variant="bordered"
		>
			{types.map((type) => (
				<SelectItem key={type.value} value={type.value}>
					{type.label}
				</SelectItem>
			))}
		</Select>
	);
};

export { Sort };
