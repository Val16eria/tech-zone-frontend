import {
	KeyboardEvent,
	FC,
	PropsWithChildren,
	Ref,
	useEffect
} from "react";
import { useNavigate } from "react-router-dom";
import {
	Card,
	CardBody,
	CardHeader,
	Input
} from "@nextui-org/react";

import { Error } from "@shared/ui";
import { getTypeAuth, isAuth } from "@shared/lib";

import "./AuthContainer.scss";

interface IAuthContainer {
	placeholder: string;
	type: "auth" | "code";
	error: string;
	inputRef: Ref<HTMLInputElement>;
	checkInputValue: () => void;
	handleKeyDown?: (event: KeyboardEvent<HTMLInputElement>) => void
}

const AuthContainer: FC<PropsWithChildren<IAuthContainer>> = (
	{
		placeholder,
		type,
		error,
		inputRef,
		checkInputValue,
		handleKeyDown,
		children
	}) => {
	const navigate = useNavigate();

	useEffect(() => {
		if (isAuth()) {
			navigate("/");
		}
	})

	const getAuthEmail = () => {
		if (getTypeAuth()) {
			return <p className="auth-container__body_txt">Почта получателя: <b>{getTypeAuth()}</b></p>
		}
	}

	return (
		<Card className="auth-container flex-column" shadow="sm">
			<CardHeader className="auth-container__header">
				<h1 className="auth-container__header_title">Войти или зарегистрироваться</h1>
			</CardHeader>
			<CardBody>
				<form className="auth-container__body flex-column">
					<div className="auth-container__body_action flex-column">
						{
							type === "code" && getAuthEmail()
						}
						<Input
							className="auth-container__body_input"
							variant="bordered"
							placeholder={placeholder}
							color="primary"
							type="text"
							maxLength={type === "code" ? 6 : undefined}
							isInvalid={!!error}
							ref={inputRef}
							onChange={checkInputValue}
							onKeyDown={handleKeyDown}
						/>
						{error && <Error text={error} />}
					</div>
					{children}
				</form>
			</CardBody>
		</Card>
	);
}

export { AuthContainer };
