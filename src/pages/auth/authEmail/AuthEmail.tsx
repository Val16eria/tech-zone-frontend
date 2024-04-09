import { FC } from "react";
import { Button } from "@nextui-org/react";

import { AuthContainer } from "@features/auth";

import "./AuthEmail.scss";

const AuthEmail: FC = () => {
	return (
		<AuthContainer placeholder="Email" type="email">
			<Button
				color="primary"
				size="md"
				fullWidth={true}
			>
				Получить код
			</Button>
		</AuthContainer>
	);
};

export { AuthEmail };
