import { FC, PropsWithChildren } from "react";
import {
	Card,
	CardBody,
	CardHeader,
	Input
} from "@nextui-org/react";

import "./AuthContainer.scss";

interface IAuthContainer {
	placeholder: string;
	type: "email" | "code";
}

const AuthContainer: FC<PropsWithChildren<IAuthContainer>> = (
	{
		placeholder,
		type,
		children
	}) => {
	return (
		<Card className="auth-container flex-column" shadow="sm">
			<CardHeader className="auth-container__header">
				<h1 className="auth-container__header_title">Войти или зарегистрироваться</h1>
			</CardHeader>
			<CardBody className="auth-container__body flex-column">
				<div className="auth-container__body_action flex-column">
					{
						type === "code" &&
            <p className="auth-container__body_txt">Почта получателя:
              <b>{localStorage.getItem("user-email")}</b>
            </p>
					}
					<Input
						className="auth-container__body_input"
						variant="bordered"
						color="primary"
						placeholder={placeholder}
					/>
				</div>
				{children}
			</CardBody>
		</Card>
	);
}

export { AuthContainer };
