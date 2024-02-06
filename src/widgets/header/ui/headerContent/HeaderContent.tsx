import { FC } from 'react';

import { TopContent } from '../top';
import { BottomContent } from '../bottom';

import './HeaderContent.scss';

const HeaderContent: FC = () => {
  return (
    <div className='header-content custom-container'>
      <TopContent />
      <BottomContent />
    </div>
  );
};

export { HeaderContent };
