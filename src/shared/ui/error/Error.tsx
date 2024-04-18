import { FC } from "react";

import "./Error.scss";

interface IError {
	text: string;
}

const Error: FC<IError> = ({ text }) => <p className="error">{text}</p>;

export { Error };
