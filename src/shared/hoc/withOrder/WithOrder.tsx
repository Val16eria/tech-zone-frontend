import { FC, useEffect } from "react";
import { useNavigate } from "react-router-dom";

import { getOrderItem, isAuth } from "@shared/lib";
import { Main } from "@pages/main";

const WithOrder = (WrappedComponent: FC) => {
	const WithOrder: FC = (props) => {
		const navigate = useNavigate();
		const isOrder = !!getOrderItem();

		useEffect(() => {
			if (!isOrder) {
				navigate("/");
			}
		}, [isOrder, navigate]);

		return isAuth() ? <WrappedComponent {...props} /> : <Main />;
	};

	return WithOrder;
};

export { WithOrder };
