import { FC, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";

import { Button, Link } from "@nextui-org/react";

import { AuthContainer } from "@features/auth";

import "./Auth.scss";

const Auth: FC = () => {
	const navigate = useNavigate()
	const [error, setError] = useState("");
	const inputRef = useRef<HTMLInputElement>(null);

	const redirect = () => {
		setError("");
		navigate("/auth/code");
	}

	const getCode = () => {
		const value = inputRef.current?.value;

		const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
		const phoneRegex = /^\+?(\d{1,3})?\s?\(?\d{3}\)?[\s.-]?\d{3}[\s.-]?\d{4}$/;

		if (value) {
			if (emailRegex.test(value)) {
				localStorage.setItem("email", value);
				redirect();
			}
			else if (phoneRegex.test(value)) {
				localStorage.setItem("phone", value);
				redirect();
			} else {
				setError("Неправильный формат вводимых данных");
			}
		} else {
			setError("Вы не ввели данные в поле");
		}
	}

	return (
		<AuthContainer
			placeholder="Email или номер телефона"
			type="auth"
			errorTxt={error}
			inputRef={inputRef}
		>
			<Button
				type="submit"
				color="primary"
				size="md"
				fullWidth={true}
				onClick={getCode}
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
