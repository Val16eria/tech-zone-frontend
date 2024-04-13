import { FC, useEffect } from "react";
import {
	Route,
	Routes,
	useLocation
} from "react-router-dom";

import { Main } from "@pages/main";
import { Policy } from "@pages/policy";
import { NotFound } from "@pages/notFound";
import { Auth, AuthCode } from "@pages/auth";

const Router: FC = () => {
	const { pathname } = useLocation();

	useEffect(() => {
		window.scrollTo(0, 0);
	}, [pathname]);

	return (
		<Routes>
			<Route path="/" element={<Main />} />
			<Route path="/policy" element={<Policy />} />
			<Route path="/auth" element={<Auth />} />
			<Route path="/auth/code" element={<AuthCode />} />
			<Route path="*" element={<NotFound />} />
		</Routes>
	);
};

export { Router };
