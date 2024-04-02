import {FC, HTMLAttributes} from 'react';

import Arrow from '../../../assets/svg/arrow.svg';
import './ArrowButton.scss';

interface IArrowButton extends HTMLAttributes<HTMLDivElement>{
	direction: 'left' | 'right';
	action: () => void
}

const ArrowButton: FC<IArrowButton> = ({ direction, action, className }) => {
  return (
    <button className={`arrow-button ${className}`} onClick={action}>
      <img
	      className={`arrow-button__${direction}_img`}
	      src={Arrow}
	      alt={`${direction} button`}
      />
    </button>
  );
};

export { ArrowButton };
