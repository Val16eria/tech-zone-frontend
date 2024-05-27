import { FC } from "react";
import { Link } from "@nextui-org/react";

import "./PolicyLink.scss";

interface IPolicyLink {
	actionTxt: string;
}

const PolicyLink: FC<IPolicyLink> = ({ actionTxt }) => {
	return (
		<p className="policy-link">Нажимая кнопку "{actionTxt}", Вы соглашаетесь
			c условиями <Link href="/policy" size="sm">политики конфиденциальности</Link>
		</p>
	);
};

export { PolicyLink };
