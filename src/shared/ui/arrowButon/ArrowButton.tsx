import { FC } from 'react';

import Arrow from '../../../assets/svg/arrow.svg';
import './ArrowButton.scss';

interface IArrowButton {
	direction: 'left' | 'right';
	action: () => void
}

const ArrowButton: FC<IArrowButton> = ({ direction, action }) => {
  return (
    <button className='arrow-button' onClick={action}>
      <img
	      className={`arrow-button__${direction}_img`}
	      src={Arrow}
	      alt={`${direction} button`}
      />
    </button>
  );
};

export { ArrowButton };
