import {
	FC,
	useEffect,
	useState
} from "react";
import { useLocation } from "react-router-dom";
import { observer } from "mobx-react-lite";
import {
	Badge,
	Divider,
	Image,
	Link,
	Navbar,
	NavbarBrand,
	NavbarContent,
	NavbarItem,
	NavbarMenu,
	NavbarMenuItem,
	NavbarMenuToggle
} from "@nextui-org/react";

import { Search } from "../search";
import { catalogItems, navbarItems } from "../../lib";
import FavouritesModel from "@features/favourites/model";
import { Logo } from "@shared/ui";

import "./TopHeader.scss";

const TopHeader: FC = observer(() => {
	const { pathname } = useLocation();
	const [isMenuOpen, setIsMenuOpen] = useState(false);

	const { favourites } = FavouritesModel;

	useEffect(() => {
		FavouritesModel.getFavourites();
	}, [favourites.length]);

	return (
		<Navbar
			maxWidth="full"
			position="static"
			className="top-header"
			isMenuOpen={isMenuOpen}
			isBlurred={false}
			onMenuOpenChange={setIsMenuOpen}
		>
			<NavbarBrand>
				<Logo mode="light" />
			</NavbarBrand>

			<NavbarContent className="top-header__search" justify="center">
				<div className="top-header__search_inp">
					<Search />
				</div>
			</NavbarContent>

			<NavbarContent justify="end">
				<div className="top-header__nav">
					{navbarItems.map((item) => (
						<NavbarItem key={item.id}>
							<Link className="top-header__link flex-column" href={item.path}>
								{item.type === "favourites" && (
									<Badge
										content={favourites.length ? favourites.length : undefined}
										color="primary"
										size="md"
									>
										<Image
											radius="none"
											width={24}
											height={24}
											src={item.icon}
											alt={item.title}
										/>
									</Badge>
								)}
								{item.type === "cart" && (
									<Badge
										content={undefined}
										color="primary"
										size="md"
									>
										<Image
											radius="none"
											width={24}
											height={24}
											src={item.icon}
											alt={item.title}
										/>
									</Badge>
								)}
								{item.type !== "cart" && item.type !== "favourites" && (
									<Image
										radius="none"
										width={24}
										height={24}
										src={item.icon}
										alt={item.title}
									/>
								)}
								<p className={`top-header__link_txt ${item.path === pathname && "isActive"}`}>
									{item.title}
								</p>
							</Link>
						</NavbarItem>
					))}
				</div>
			</NavbarContent>

			<NavbarMenuToggle
				aria-label={isMenuOpen ? "Close menu" : "Open menu"}
				className="md:hidden"
			/>

			<NavbarMenu>
				<div className="top-header__menu flex-column">
					{navbarItems.map((item) => (
						<NavbarMenuItem key={item.id}>
							<Link
								className="top-header__menu-link"
								color="foreground"
								href={item.path}
							>
								<Image
									radius="none"
									width={24}
									height={24}
									src={item.icon}
									alt={item.title}
								/>
								<p className={`top-header__menu-link_txt ${item.path === pathname && "isActive"} `}>
									{item.title}
								</p>
							</Link>
						</NavbarMenuItem>
					))}

					<Divider className="divider" />

					{catalogItems.map((item) => (
						<NavbarItem key={item.id}>
							<Link
								className="top-header__menu-link flex-row"
								color="foreground"
								href={item.path}
							>
								<Image
									radius="none"
									width={24}
									height={24}
									src={item.icon}
									alt={item.title}
								/>
								<p className={`top-header__menu-link_txt ${item.path === pathname && "isActive"}`}>
									{item.title}
								</p>
							</Link>
						</NavbarItem>
					))}
				</div>
			</NavbarMenu>
		</Navbar>
	);
});

export { TopHeader };

