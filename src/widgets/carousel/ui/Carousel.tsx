import { FC, useState } from 'react';

import { carouselItems } from '../lib';
import { ArrowButton } from '../../../shared/ui';

import './Carousel.scss';

const Carousel: FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const goToPrevious = () => {
    const newIndex = currentIndex === 0 ? carouselItems.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };

  const goToNext = () => {
    const newIndex = currentIndex === carouselItems.length -1 ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };

  return (
    <div className='carousel'>
      <ArrowButton direction='left' action={goToPrevious} />
      <img src={carouselItems[currentIndex].image} alt='sale'/>
      <ArrowButton direction='right' action={goToNext}/>
    </div>
  );
};

export { Carousel };
