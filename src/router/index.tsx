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
import { Favourites } from "@pages/favourites";
import { Cart } from "@pages/cart";
import { Order } from "@pages/order";
import { Product } from "@pages/product";
import { Profile } from "@pages/profile";
import { CategoryCatalog, SearchCatalog } from "@pages/catalog";

const Router: FC = () => {
	const { pathname } = useLocation();

	useEffect(() => {
		window.scrollTo(0, 0);
	}, [pathname]);

	return (
		<Routes>
			<Route path="/auth" element={isStatusAuthCode() ? <AuthCode /> : <Auth />} />
			<Route path="/" element={<Main />} />
			<Route path="/favourites" element={<Favourites />} />
			<Route path="/cart" element={<Cart />} />
			<Route path="/order" element={<Order />} />
			<Route path="/search/:suggestion" element={<SearchCatalog />} />
			<Route path="/products/:type" element={<CategoryCatalog />} />
			<Route path="/product/:id" element={<Product />} />
			<Route path="/profile" element={<Profile />} />
			<Route path="/policy" element={<Policy />} />
			<Route path="*" element={<NotFound />} />
		</Routes>
	);
};

export { Router };
