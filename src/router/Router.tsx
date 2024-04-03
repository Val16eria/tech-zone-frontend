import { FC } from "react";
import { Route, Routes } from "react-router-dom";

import { Main } from "@pages/main";
import { NotFound } from "@pages/notFound";

const Router: FC = () => {
	return (
		<Routes>
			<Route path='/' element={<Main />} />
			<Route path='*' element={<NotFound />} />
		</Routes>
	);
};

export { Router };
