import {
	FC,
	KeyboardEvent,
	useEffect,
	useRef,
	useState
} from "react";
import { useNavigate } from "react-router-dom";
import { observer } from "mobx-react-lite";
import { Button } from "@nextui-org/react";

import { AuthContainer } from "@features/auth/ui";
import { codeRegex, numberRegex } from "@features/auth/lib";
import AuthModel from "@features/auth/model";
import {
	clearStatusAuthCode,
	clearTypeAuth,
	getTypeAuth,
	setStatusAuthCode,
	setTypeAuth
} from "@shared/lib";
import { Loader } from "@shared/ui";

import "./AuthCode.scss";

const AuthCode: FC = observer(() => {
	const navigate = useNavigate();
	const [error, setError] = useState("");
	const [counter, setCounter] = useState(() => {
		const savedCounter = localStorage.getItem("counter");
		return savedCounter ? parseInt(savedCounter, 10) : 0;
	});
	const inputRef = useRef<HTMLInputElement>(null);
	const email = getTypeAuth();

	useEffect(() => {
		if (counter > 0) {
			const timerId = setTimeout(() => {
				setCounter(prevCounter => {
					const newCounter = prevCounter - 1;
					localStorage.setItem("counter", newCounter.toString());
					return newCounter;
				});
			}, 1000);
			return () => clearTimeout(timerId);
		} else {
			localStorage.removeItem("counter");
		}
	}, [counter]);

	if (AuthModel.loading) {
		return <Loader />;
	}

	const checkInputValue = () => {
		const inputValue = inputRef.current?.value;
		const maxLength = inputRef.current?.maxLength;

		if (inputValue && inputValue.length === maxLength) {
			if (codeRegex.test(inputValue)) {
				setError("");

				if (email) {
					AuthModel.authentication(email, Number(inputValue))
						.then(() => {
							if (AuthModel.error) {
								setError(AuthModel.error);
							} else {
								clearStatusAuthCode();
								localStorage.removeItem("counter");
								clearTypeAuth();
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
	};

	const resubmit = () => {
		if (email) {
			AuthModel.sendAuthenticationCode(email)
				.then(() => {
					if (AuthModel.error) {
						setError(AuthModel.error);
					} else {
						setStatusAuthCode();
						setTypeAuth(email);
						const newCounter = 120;
						setCounter(newCounter);
						localStorage.setItem("counter", newCounter.toString());
					}
				})
				.catch((error) => setError(error));
		}
	};

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
				color={counter ? "default" : "primary"}
				variant="light"
				size="md"
				isDisabled={!!counter}
				onClick={resubmit}
			>
				Отправить повторно {!!counter && `через ${counter} сек`}
			</Button>
		</AuthContainer>
	);
});

export { AuthCode };
