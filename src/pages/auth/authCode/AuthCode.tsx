import { FC } from "react";
import { Button } from "@nextui-org/react";

import { AuthContainer } from "@features/auth";

import "./AuthCode.scss";

const AuthCode: FC = () => {
	return (
		<AuthContainer type="code" placeholder="Код из почты">
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
