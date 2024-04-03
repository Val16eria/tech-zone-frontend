import { FC } from "react";
import { Route, Routes } from "react-router-dom";

import { Main } from "@pages/main";
import { Policy } from "@pages/policy";
import { NotFound } from "@pages/notFound";

const Router: FC = () => {
	return (
		<Routes>
			<Route path='/' element={<Main />} />
			<Route path='/policy' element={<Policy />} />
			<Route path='*' element={<NotFound />} />
		</Routes>
	);
};

export { Router };
