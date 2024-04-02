import { FC, useState } from 'react';
import {
	Badge, Divider,
	Link,
	Navbar,
	NavbarBrand,
	NavbarContent,
	NavbarItem,
	NavbarMenu,
	NavbarMenuItem,
	NavbarMenuToggle
} from '@nextui-org/react';

import { Search } from '../search';
import { catalogItems, navbarItems } from '../../lib';
import { Logo } from '../../../../shared/ui';

import './TopHeader.scss';

const TopHeader: FC = () => {
	const [isMenuOpen, setIsMenuOpen] = useState(false);

	return (
		<Navbar
			maxWidth='full'
			position='static'
			className='top-header'
			isMenuOpen={isMenuOpen}
			onMenuOpenChange={setIsMenuOpen}
		>
			<NavbarBrand>
				<Logo mode='light' />
			</NavbarBrand>

			<NavbarContent className='top-header__search' justify='center'>
				<div className='top-header__search_inp'>
					<Search />
				</div>
			</NavbarContent>

			<NavbarContent justify='end'>
				<div className='top-header__nav'>
					{navbarItems.map((item) => (
						<NavbarItem key={item.id}>
							<Link href={item.path} className='top-header__link flex-column'>
								{
									item.type === 'cart' || item.type === 'favourites' ?
										<Badge content='5' color='primary' size='md'>
											{item.icon}
										</Badge> :
										<span>{item.icon}</span>
								}
								<p className='top-header__link_txt'>{item.title}</p>
							</Link>
						</NavbarItem>
					))}
				</div>
			</NavbarContent>

			<NavbarMenuToggle
				aria-label={isMenuOpen ? 'Close menu' : 'Open menu'}
				className='md:hidden'
			/>
			<NavbarMenu>
				<div className='top-header__menu flex-column'>
					{navbarItems.map((item) => (
						<NavbarMenuItem key={item.id}>
							<Link className='top-header__menu-link' color='foreground' href={item.path}>
								<span>{item.icon}</span>
								<p className='top-header__menu-link_txt'>{item.title}</p>
							</Link>
						</NavbarMenuItem>
					))}

					<Divider className='divider'/>

					{catalogItems.map((item) => (
						<NavbarItem key={item.id}>
							<Link className='top-header__menu-link flex-row' color='foreground' href={item.path}>
								<span>{item.icon}</span>
								<p className='top-header__menu-link_txt'>{item.title}</p>
							</Link>
						</NavbarItem>
					))}
				</div>
			</NavbarMenu>
		</Navbar>
	);
};

export { TopHeader };

