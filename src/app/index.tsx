import { FC } from 'react';

import { HeaderContent, Footer } from '../widgets';
import { Main } from '../pages';

import './styles/index.css';

const App: FC = () => {
  return (
    <>
      <HeaderContent/>
      <Main/>
      <Footer />
    </>
  );
};

export { App };
