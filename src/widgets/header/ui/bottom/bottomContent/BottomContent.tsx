import { FC } from 'react';

import { Catalog } from '../catalog';

import './BottomContetn.scss';

const BottomContent: FC = () => {
  return (
    <div className='bottom-content'>
      <p>divider</p>
      <Catalog />
      {/*	filters */}
    </div>
  );
};

export { BottomContent };
