import {
	FC,
	useRef,
	useState
} from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@nextui-org/react";

import { AuthContainer } from "@features/auth";
import { setAuth, clearStatusAuthCode } from "@shared/lib";

import "./AuthCode.scss";

const AuthCode: FC = () => {
	const navigate = useNavigate();
	const [error, setError] = useState("");
	const inputRef = useRef<HTMLInputElement>(null);

	const checkInputValue = () => {
		const codeRegex = /^\d{6}$/;
		const inputValue = inputRef.current?.value;

		if (inputValue && inputValue.length === 6) {
			if (codeRegex.test(inputValue)) {
				setError("");
				setTimeout(() => {
					clearStatusAuthCode();
					setAuth();
					navigate("/");
				}, 500);
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
