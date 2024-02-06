import { FC } from 'react';
import { Badge, Link } from '@nextui-org/react';

import { navbarItems } from '../../../lib';

import './Navbar.scss';

const Navbar: FC = () => {
  return (
    <div className='navbar'>
      {navbarItems.map((item) => (
        <Link key={item.id} href={item.type} className='navbar__item'>
          {
            item.type === 'cart' || item.type === 'favourites' ?
              <Badge content='5' color='primary' size='md'>
                {item.icon}
              </Badge> :
              item.icon
          }
          <p className='navbar__item_txt'>{item.title}</p>
        </Link>
      ))}
    </div>
  );
};

export { Navbar };
