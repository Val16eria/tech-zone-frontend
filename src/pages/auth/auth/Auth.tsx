import {
	FC,
	useRef,
	useState
} from "react";
import { useNavigate } from "react-router-dom";

import { Button, Link } from "@nextui-org/react";

import { AuthContainer } from "@features/auth";
import { setStatusAuthCode, setTypeAuth } from "@shared/lib";

import "./Auth.scss";

const Auth: FC = () => {
	const navigate = useNavigate();
	const [error, setError] = useState("");
	const inputRef = useRef<HTMLInputElement>(null);

	const changeInputValue = () => {
		setError("");
	}

	const checkInputValue = () => {
		const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
		const phoneRegex = /^\+?(\d{1,3})?\s?\(?\d{3}\)?[\s.-]?\d{3}[\s.-]?\d{4}$/;
		const inputValue = inputRef.current?.value;

		if (inputValue) {
			if (emailRegex.test(inputValue)) {
				setError("");
				getCode("email", inputValue);
			}
			else if (phoneRegex.test(inputValue)) {
				setError("");
				getCode("phone", inputValue);
			} else {
				setError("Неправильный формат вводимых данных");
			}
		} else {
			setError("");
		}
	}

	const getCode = (inputType: string, inputValue: string) => {
		setStatusAuthCode();
		setTypeAuth(inputType, inputValue);
		navigate("/auth");
	}

	return (
		<AuthContainer
			placeholder="Email или номер телефона"
			type="auth"
			error={error}
			inputRef={inputRef}
			checkInputValue={changeInputValue}
		>
			<Button
				type="submit"
				color="primary"
				size="md"
				fullWidth={true}
				onClick={checkInputValue}
			>
				Получить код
			</Button>
			<p className="auth__txt">Нажимая кнопку "Получить код",
				Вы соглашаетесь c условиями <Link size="sm" href="/policy">политики конфиденциальности</Link>
			</p>
		</AuthContainer>
	);
};

export { Auth };
