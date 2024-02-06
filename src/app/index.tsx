import { FC } from 'react';

import { HeaderContent } from '../widgets';
import { Main } from '../pages';

import './styles/index.css';

const App: FC = () => {
  return (
    <>
      <HeaderContent/>
      <Main/>
    </>
  );
};

export { App };
