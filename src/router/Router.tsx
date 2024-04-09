import { FC } from "react";
import { Route, Routes } from "react-router-dom";

import { Main } from "@pages/main";
import { Policy } from "@pages/policy";
import { NotFound } from "@pages/notFound";
import { AuthEmail, AuthCode } from "@pages/auth";

const Router: FC = () => {
	return (
		<Routes>
			<Route path="/" element={<Main />} />
			<Route path="/policy" element={<Policy />} />
			<Route path="/auth" element={<AuthEmail />} />
			<Route path="/auth/code" element={<AuthCode />} />
			<Route path="*" element={<NotFound />} />
		</Routes>
	);
};

export { Router };
