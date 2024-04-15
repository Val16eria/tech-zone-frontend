import {
	FC,
	PropsWithChildren,
	Ref
} from "react";
import {
	Card,
	CardBody,
	CardHeader,
	Input
} from "@nextui-org/react";

import { Error } from "@shared/ui";

import "./AuthContainer.scss";

interface IAuthContainer {
	placeholder: string;
	type: "auth" | "code";
	error: string;
	inputRef: Ref<HTMLInputElement>;
	checkInputValue: () => void;
}

const AuthContainer: FC<PropsWithChildren<IAuthContainer>> = (
	{
		placeholder,
		type,
		error,
		inputRef,
		checkInputValue,
		children
	}) => {

	const getAuthType = () => {
		if (localStorage.getItem("email")) {
			return <p className="auth-container__body_txt">Почта получателя: <b>{localStorage.getItem("email")}</b></p>
		} else {
			return <p className="auth-container__body_txt">Номер получателя: <b>{localStorage.getItem("phone")}</b></p>
		}
	}

	return (
		<Card className="auth-container flex-column" shadow="sm">
			<CardHeader className="auth-container__header">
				<h1 className="auth-container__header_title">Войти или зарегистрироваться</h1>
			</CardHeader>
			<CardBody className="auth-container__body flex-column">
				<div className="auth-container__body_action flex-column">
					{
						type === "code" && getAuthType()
					}
					<Input
						className="auth-container__body_input"
						variant="bordered"
						placeholder={placeholder}
						color="primary"
						type={type === "auth" ? "text" : "number"}
						isInvalid={!!error}
						ref={inputRef}
						onChange={checkInputValue}
					/>
					{error && <Error text={error} />}
				</div>
				{children}
			</CardBody>
		</Card>
	);
}

export { AuthContainer };
