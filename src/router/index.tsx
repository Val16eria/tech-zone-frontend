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
import { isStatusAuthCode } from "@shared/lib";
import { Laptop } from "@pages/catalog";

const Router: FC = () => {
	const { pathname } = useLocation();

	useEffect(() => {
		window.scrollTo(0, 0);
	}, [pathname]);

	return (
		<Routes>
			<Route path="/auth" element={isStatusAuthCode() ? <AuthCode /> : <Auth />} />
			<Route path="/" element={<Main />} />
			<Route path="/laptops" element={<Laptop />} />
			<Route path="/policy" element={<Policy />} />
			<Route path="*" element={<NotFound />} />
		</Routes>
	);
};

export { Router };
