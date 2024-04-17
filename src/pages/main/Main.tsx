import { FC } from "react";

import { Carousel, Benefit } from "@features/main";
import { Section } from "@shared/ui";

import "./Main.scss";

const Main: FC = () => {
  return (
    <div className="main flex-column custom-container">
      <div className="main__carousel">
        <Carousel />
      </div>
      <div className="main__content flex-column">
        <Section title="Новинки" products={[]} />
        <Section title="Хиты продаж" products={[]} />
        <Benefit/>
      </div>
    </div>
  );
};

export { Main };
