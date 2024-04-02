import { FC } from 'react';
import { Button, Input } from '@nextui-org/react';

import { Magnifier } from '../../../../assets/icons';
import './Search.scss';

const Search: FC = () => {
  return (
    <Input
      type='search'
      color='primary'
      variant='bordered'
      placeholder='Поиск по сайту'
      className='search'
      endContent={
        <Button className='search__icon' isIconOnly color='primary'>
          <Magnifier />
        </Button>
      }
    />
  );
};

export { Search };
