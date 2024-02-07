import { FC } from 'react';

import { Carousel, Benefit } from '../../features/main';

import './Main.scss';

const Main: FC = () => {
  return (
    <div className='main'>
      <div className='main__carousel'>
        <Carousel />
      </div>
      <div className='custom-container'>
        <Benefit />
      </div>
    </div>
  );
};

export { Main };
