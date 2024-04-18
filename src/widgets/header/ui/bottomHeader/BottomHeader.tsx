import { FC } from "react";
import { useLocation } from "react-router-dom";
import {
	Image,
	Link,
	Navbar,
	NavbarContent,
	NavbarItem
} from "@nextui-org/react";

import { catalogItems } from "../../lib";

import "./BottomHeader.scss";

const BottomHeader: FC = () => {
	const { pathname } = useLocation();

	return (
		<Navbar
			maxWidth="full"
			position="static"
			className="bottom-header"
			isBlurred={false}
		>
			<NavbarContent>
				{catalogItems.map((item) => (
					<NavbarItem key={item.id}>
						<Link
							href={item.path}
							className="bottom-header__link flex-row"
						>
							<Image
								radius="none"
								width={24}
								height={24}
								src={item.icon}
								alt={item.title}
							/>
							<p className={`bottom-header__link_txt ${pathname === item.path && "isActive"}`}>
								{item.title}
							</p>
						</Link>
					</NavbarItem>
				))}
			</NavbarContent>
		</Navbar>
	);
};

export {BottomHeader};
