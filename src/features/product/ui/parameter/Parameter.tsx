import { FC } from "react";
import { useNavigate } from "react-router-dom";
import { observer } from "mobx-react-lite";

import { IColorVariants, IMemoryVariants } from "@shared/api";

import "./Parameter.scss";
import { Button } from "@nextui-org/react";

interface IParameter {
	title: string;
	variants: IColorVariants[] | IMemoryVariants[];
	current_variant: string | number;
}

const Parameter: FC<IParameter> = observer((
	{
		title,
		variants,
		current_variant
	}) => {
	const navigate = useNavigate();

	const isColorVariant = (variant: IColorVariants | IMemoryVariants): variant is IColorVariants => {
		return (variant as IColorVariants).color_main !== undefined;
	};

	const isMemoryVariant = (variant: IColorVariants | IMemoryVariants): variant is IMemoryVariants => {
		return (variant as IMemoryVariants).memory !== undefined;
	};

	return (
		<div className="parameter flex-column">
			<p>{title}: <b>{typeof current_variant === "string" ? current_variant : `${current_variant} ГБ`}</b></p>
			<div className="parameter__variants flex-row">
				{variants.map((variant) => (
					<div key={variant.id_product}>
						{isColorVariant(variant) && (
							<Button
								key={variant.id_product}
								className="parameter__variants_variant"
								color={current_variant === variant.color_main ? "primary" : "default"}
								variant="bordered"
								onClick={() => navigate(`/product/${variant.id_product}`)}
							>
								<span className="parameter__variant_color" style={{ backgroundColor: variant.color_hex }}></span>
								<p>{variant.color_main}</p>
							</Button>
						)}

						{isMemoryVariant(variant) && (
							<Button
								key={variant.id_product}
								className="parameter__variants_variant"
								color={current_variant === variant.memory ? "primary" : "default"}
								variant="bordered"
								onClick={() => navigate(`/product/${variant.id_product}`)}
							>
								<p>{variant.memory} ГБ</p>
							</Button>
						)}
					</div>
				))}
			</div>
		</div>
	);
});

export { Parameter };
