import { FC } from 'react';

import { navbarItems } from '../../../lib/constants.tsx';

import './Navbar.scss';

const Navbar: FC = () => {
  return (
    <div className='navbar'>
      {navbarItems.map((item) => (
        <div key={item.id} className='navbar__item'>
          {item.icon}
          <p className='navbar__item_txt'>{item.title}</p>
        </div>
      ))}
    </div>
  );
};

export { Navbar };
