import { FC } from 'react';

import { Carousel } from '../../widgets';

import './Main.scss';

const Main: FC = () => {
  return (
    <div className='main'>
      <div className='main__carousel'>
        <Carousel />
      </div>
    </div>
  );
};

export { Main };
