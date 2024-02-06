import { FC } from 'react';
import { Link } from '@nextui-org/react';

import './Logo.scss';

interface ILogo {
  mode: 'light' | 'dark';
}

const Logo: FC<ILogo> = ({ mode }) => {
  return (
    <Link href='/'>
      <p className={`logo logo-${mode}`}>TechZone</p>
    </Link>
  );
};

export { Logo };
