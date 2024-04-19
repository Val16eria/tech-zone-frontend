import { FC } from "react";
import { Spinner } from "@nextui-org/react";

import "./Loader.scss";

const Loader: FC = () => {
	return (
		<div className="loader remark-container">
			<Spinner size="lg" />
		</div>
	)
};

export { Loader };
