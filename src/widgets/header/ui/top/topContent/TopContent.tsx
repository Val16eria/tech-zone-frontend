import { FC } from 'react';

import { Search } from '../search';
import { Navbar } from '../navbar';
import { Logo } from '../../../../../shared/ui';

import './TopContent.scss';

const TopContent: FC = () => {
  return (
    <div className="top-content">
      <Logo />
      <Search />
      <Navbar />
    </div>
  );
};

export { TopContent };
