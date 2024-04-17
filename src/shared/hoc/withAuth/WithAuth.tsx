import { FC, useEffect } from "react";
import { useNavigate } from "react-router-dom";

import { Auth } from "@pages/auth";
import { isAuth } from "@shared/lib";

const WithAuth = (WrappedComponent: FC) => {
	const WithAuth: FC = (props) => {
		const navigate = useNavigate();

		useEffect(() => {
			if (!isAuth()) {
				navigate("/auth");
			}
		}, [navigate]);

		return isAuth() ? <WrappedComponent {...props} /> : <Auth />;
	};

	return WithAuth;
};

export { WithAuth };
