import { FC } from 'react';
import { Button, Input } from '@nextui-org/react';

import { Magnifier } from '../../../../../assets/icons';
import './Search.scss';

const Search: FC = () => {
  return (
    <div className='search'>
      <Input
        type='search'
        color='primary'
        variant='bordered'
        placeholder='Поиск по сайту'
        className='search__input'
        endContent={
          <Button className='search__input_icon' isIconOnly color='primary'>
            <Magnifier />
          </Button>
        }
      />
    </div>
  );
};

export { Search };
