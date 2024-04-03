import { FC } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@nextui-org/react";

import "./NotFound.scss";

const NotFound: FC = () => {
	const navigate = useNavigate();

	return (
		<div className="not-found flex-column custom-container">
			<div>
				<p className="not-found__title">404</p>
				<p className="not-found__description">Страницы с таким адресом не существует</p>
			</div>
			<Button
				color="primary"
				size="md"
				onClick={() => navigate("/")}
			>
				Перейти на главную
			</Button>
		</div>
	);
};

export { NotFound };
