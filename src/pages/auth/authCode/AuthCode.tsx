import {
	FC,
	useRef,
	useState
} from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@nextui-org/react";

import { AuthContainer } from "@features/auth";
import AuthModel from "@features/auth/model";
import {
	setAuth,
	clearStatusAuthCode,
	getTypeAuth
} from "@shared/lib";
import { Loader } from "@shared/ui";

import "./AuthCode.scss";

const AuthCode: FC = () => {
	const navigate = useNavigate();
	const [error, setError] = useState("");
	const inputRef = useRef<HTMLInputElement>(null);

	if (AuthModel.loading) {
		return <Loader />;
	}

	const checkInputValue = () => {
		const maxLength = 6;
		const codeRegex = /^\d{6}$/;
		const inputValue = inputRef.current?.value;

		if (inputValue && inputValue.length === maxLength) {
			if (codeRegex.test(inputValue)) {
				setError("");
				const email = getTypeAuth();

				if (email) {
					AuthModel.authentication(email, Number(inputValue))
						.then(() => {
							if (AuthModel.error) {
								setError(AuthModel.error);
							} else {
								clearStatusAuthCode();
								setAuth();
								navigate("/");
							}
						});
				}
			} else {
				setError("Неправильный код");
			}
		} else {
			setError("");
		}
	}

	return (
		<AuthContainer
			error={error}
			type="code"
			placeholder="Код"
			inputRef={inputRef}
			checkInputValue={checkInputValue}
		>
			<Button
				color="primary"
				variant="light"
				size="md"
				isDisabled={true}
			>
				Отправить повторно
			</Button>
		</AuthContainer>
	);
};

export { AuthCode };
