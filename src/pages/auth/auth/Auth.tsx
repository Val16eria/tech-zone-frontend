import {
	FC,
	useRef,
	useState
} from "react";
import { useNavigate } from "react-router-dom";

import { Button, Link } from "@nextui-org/react";

import { AuthContainer } from "@features/auth/ui";
import { emailRegex } from "@features/auth/lib";
import AuthModel from "@features/auth/model";
import { setStatusAuthCode, setTypeAuth } from "@shared/lib";
import { Loader } from "@shared/ui";

import "./Auth.scss";

const Auth: FC = () => {
	const navigate = useNavigate();
	const [error, setError] = useState("");
	const [isDisable, setDisable] = useState(true);
	const inputRef = useRef<HTMLInputElement>(null);

	const changeInputValue = () => {
		setDisable(!inputRef.current?.value);
		setError("");
	};

	if (AuthModel.loading) {
		return <Loader />;
	}

	const getCode = (inputValue: string) => {
		AuthModel.sendAuthenticationCode(inputValue)
			.then(() => {
				if (AuthModel.error) {
					setError(AuthModel.error);
				} else {
					setStatusAuthCode();
					setTypeAuth(inputValue);
					navigate("/auth");
				}
			})
			.catch((error) => setError(error));
	}

	const checkInputValue = () => {
		const inputValue = inputRef.current?.value;

		if (inputValue) {
			if (emailRegex.test(inputValue)) {
				setError("");
				getCode(inputValue);
			} else {
				setError("Неправильный формат вводимых данных");
			}
		} else {
			setError("");
		}
	}

	return (
		<AuthContainer
			placeholder="Email"
			type="auth"
			error={error}
			inputRef={inputRef}
			checkInputValue={changeInputValue}
		>
			<Button
				color="primary"
				size="md"
				fullWidth={true}
				isDisabled={isDisable}
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
