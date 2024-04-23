import { FC } from "react";

import { Carousel, Benefit } from "@features/main";

import "./Main.scss";

const Main: FC = () => {
  return (
    <div className="main flex-column">
      <div className="main__carousel">
        <Carousel />
      </div>
      <div className="main__content flex-column">
        {/*новинки*/}
        {/*хиты продаж*/}
        <Benefit/>
      </div>
    </div>
  );
};

export { Main };
