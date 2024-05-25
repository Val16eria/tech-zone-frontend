import { forwardRef } from "react";
import { Input } from "@nextui-org/react";

interface IPersonalDataInput {
	type: string;
	variant: "flat" | "faded" | "bordered" | "underlined" | undefined;
	label: string;
	defaultValue: string;
	isInvalid: boolean;
	errorMessage: string;
}

const PersonalDataInput = forwardRef<HTMLInputElement, IPersonalDataInput>(({
	type,
	variant,
	label,
	defaultValue,
	isInvalid,
	errorMessage,
	...props
	}, ref) => {
	return (
		<Input
			fullWidth={true}
			type={type}
			label={label}
			variant={variant}
			defaultValue={defaultValue}
			isInvalid={isInvalid}
			errorMessage={errorMessage}
			ref={ref}
			{...props}
		/>
	);
});

export { PersonalDataInput };
