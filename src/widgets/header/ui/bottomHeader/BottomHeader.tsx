import { FC } from 'react';
import {
	Link,
	Navbar,
	NavbarContent,
	NavbarItem
} from '@nextui-org/react';

import { catalogItems } from '../../lib';

import './BottomHeader.scss';

const BottomHeader: FC = () => {
	return (
		<Navbar position='static' className='bottom-header'>
			<NavbarContent>
				{catalogItems.map((item) => (
					<NavbarItem key={item.id}>
						<Link
							href={item.path}
							className='bottom-header__link flex-row'
						>
							<span>{item.icon}</span>
							<p className='bottom-header__link_txt'>{item.title}</p>
						</Link>
					</NavbarItem>
				))}
			</NavbarContent>
		</Navbar>
	);
};

export {BottomHeader};
