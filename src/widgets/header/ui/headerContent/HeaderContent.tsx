import { FC } from 'react';
import { Divider } from '@nextui-org/react';

import { TopContent } from '../top';
import { Catalog } from '../catalog';

import './HeaderContent.scss';

const HeaderContent: FC = () => {
  return (
    <div className='header-content custom-container'>
      <TopContent />
      <Divider className='header-content__divider' />
      <Catalog />
    </div>
  );
};

export { HeaderContent };
