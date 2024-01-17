import { FC } from 'react';
import { Divider } from '@nextui-org/react';

import { Catalog } from '../catalog';

import './BottomContetn.scss';

const BottomContent: FC = () => {
  return (
    <div className='bottom-content'>
      <Divider />
      <Catalog />
    </div>
  );
};

export { BottomContent };
