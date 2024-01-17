import { FC } from 'react';

import { TopContent } from '../top';
import { BottomContent } from '../bottom';
import { HeaderFilter } from '../headerFilter';

import './HeaderContent.scss';

const HeaderContent: FC = () => {
  return (
    <div className='header-content container'>
      <div className='header-content__actions'>
        <TopContent />
        <BottomContent />
      </div>
      <HeaderFilter />
    </div>
  );
};

export { HeaderContent };
