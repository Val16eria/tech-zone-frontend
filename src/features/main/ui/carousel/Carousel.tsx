import {
  FC,
  useState,
  useEffect
} from 'react';
import { Image } from '@nextui-org/react';

import { carouselItems } from '../../lib';
import { ArrowButton } from '../../../../shared/ui';

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

  useEffect(() => {
    const interval = setInterval(goToNext, 3000);
    return () => clearInterval(interval);
  }, [currentIndex]);

  return (
    <div className='carousel flex-row'>
      <ArrowButton
        className='carousel__btn'
        direction='left'
        action={goToPrevious}
      />
      <Image src={carouselItems[currentIndex].image} alt='sale'/>
      <ArrowButton
        className='carousel__btn'
        direction='right'
        action={goToNext}
      />
    </div>
  );
};

export { Carousel };
