import {FC, useRef} from "react";
import { Button } from "@nextui-org/react";

import { AuthContainer } from "@features/auth";

import "./AuthCode.scss";

const AuthCode: FC = () => {
	const inputRef = useRef<HTMLInputElement>(null);

	return (
		<AuthContainer
			errorTxt=""
			type="code"
			placeholder="Код"
			inputRef={inputRef}
		>
			<Button
				color="primary"
				variant="light"
				size="md"
			>
				Отправить повторно
			</Button>
		</AuthContainer>
	);
};

export { AuthCode };
