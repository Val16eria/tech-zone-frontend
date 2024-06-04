import {FC, useEffect, useState} from "react";
import { Checkbox } from "@nextui-org/react";

import "./Payment.scss";

const Payment: FC = () => {
	const [selected, setSelected] = useState(localStorage.getItem("payment") || "cash");

	useEffect(() => {
		localStorage.setItem("payment", selected);
	}, [selected]);

	const handleChange = (value: string) => {
		setSelected(value);
	};

	return (
		<div className="payment flex-row">
			<Checkbox
				className={`payment__checkbox ${selected === "cash" && "payment__checkbox_active"}`}
				isSelected={selected === "cash"}
				onChange={() => handleChange("cash")}
				value="cash"
			>
				<p className="payment__txt">Наличный расчет</p>
			</Checkbox>
			<Checkbox
				className={`payment__checkbox ${selected === "card" && "payment__checkbox_active"}`}
				isSelected={selected === "card"}
				onChange={() => handleChange("card")}
				value="card"
			>
				<p className="payment__txt">Оплата картой</p>
			</Checkbox>
		</div>
	);
};

export { Payment };
