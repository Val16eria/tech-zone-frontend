import { FC } from "react";
import { Notice } from "@shared/ui";

import ErrorIcon from "@assets/svg/error_outline.svg";

const ErrorNotice: FC = () => {
	return (
		<Notice
			icon={ErrorIcon}
			title="Что-то пошло не так"
			description="Проверьте подключение к интернету и обновите страницу"
		/>
	);
};

export { ErrorNotice };
