import {
  FC,
  useState,
  useEffect
} from "react";
import { useNavigate } from "react-router-dom";
import { Image } from "@nextui-org/react";

import { getBanners, IBanner } from "@shared/api";
import { ArrowButton } from "@shared/ui";

import "./Carousel.scss";

const Carousel: FC = () => {
  const navigate = useNavigate();
  const [currentIndex, setCurrentIndex] = useState(0);
  const [carouselItems, setCarouselItems] = useState<IBanner[]>([]);

  useEffect(() => {
    const loadBanners = async () => {
      const response = await getBanners();
      setCarouselItems(response);
    };

    loadBanners();
  }, []);

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

  if (carouselItems.length === 0) {
    return;
  }

  return (
    <div className="carousel flex-row">
      <ArrowButton
        className="carousel__btn"
        direction="left"
        action={goToPrevious}
      />
      <Image
        className="cursor-pointer"
        src={carouselItems[currentIndex].link}
        alt="sale"
        onClick={() => navigate(`/product/${carouselItems[currentIndex].id_product}`)}
      />
      <ArrowButton
        className="carousel__btn"
        direction="right"
        action={goToNext}
      />
    </div>
  );
};

export { Carousel };
