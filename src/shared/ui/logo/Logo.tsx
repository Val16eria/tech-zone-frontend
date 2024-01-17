import { FC } from 'react';
import { Link } from '@nextui-org/react';

import './Logo.scss';

const Logo: FC = () => {
  return (
    <Link href='/'>
      <p className='logo'>TechZone</p>
    </Link>
  );
};

export { Logo };
