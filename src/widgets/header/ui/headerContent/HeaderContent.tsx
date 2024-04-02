import { FC } from 'react';
import { Divider } from '@nextui-org/react';

import { TopHeader } from '../topHeader';
import { BottomHeader } from '../bottomHeader';

import './HeaderContent.scss';

const HeaderContent: FC = () => {
  return (
    <div className='header-content custom-container flex-column'>
      <TopHeader />
      <Divider className='hidden md:flex header-content__divider' />
      <BottomHeader />
    </div>
  );
};

export { HeaderContent };
