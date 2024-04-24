import {
	FC, KeyboardEvent,
	useRef,
	useState
} from "react";
import { useNavigate } from "react-router-dom";
import { observer } from "mobx-react-lite";
import { Button } from "@nextui-org/react";

import { AuthContainer } from "@features/auth/ui";
import { codeRegex, numberRegex } from "@features/auth/lib";
import AuthModel from "@features/auth/model";
import { clearStatusAuthCode, getTypeAuth } from "@shared/lib";
import { Loader } from "@shared/ui";

import "./AuthCode.scss";

const AuthCode: FC = observer(() => {
	const navigate = useNavigate();
	const [error, setError] = useState("");
	const inputRef = useRef<HTMLInputElement>(null);

	if (AuthModel.loading) {
		return <Loader />;
	}

	const checkInputValue = () => {
		const inputValue = inputRef.current?.value;
		const maxLength = inputRef.current?.maxLength;

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

	const handleKeyDown = (event: KeyboardEvent<HTMLInputElement>) => {
		const key = event.key;
		const isNumeric = numberRegex.test(key);
		const isBackspaceOrDelete = key === "Backspace" || key === "Delete";

		if (!isNumeric && !isBackspaceOrDelete) {
			event.preventDefault();
		}

		if ((event.currentTarget.value.length >= 6) && !isBackspaceOrDelete) {
			event.preventDefault();
		}
	};

	return (
		<AuthContainer
			error={error}
			type="code"
			placeholder="Код"
			inputRef={inputRef}
			checkInputValue={checkInputValue}
			handleKeyDown={handleKeyDown}
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
});

export { AuthCode };
