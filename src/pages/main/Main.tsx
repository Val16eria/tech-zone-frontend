import { FC, useEffect } from "react";
import { observer } from "mobx-react-lite";

import CatalogModel from "@features/catalog/model";
import { Carousel, Benefit } from "@features/main";
import {
  Loader,
  Section,
  ProductCard
} from "@shared/ui";

import "./Main.scss";

const Main: FC = observer(() => {
  const { hot_products, new_products, loading } = CatalogModel;

  useEffect(() => {
    CatalogModel.getNewProducts(4);
    CatalogModel.getHotProducts(4);
  }, []);

  if (loading) {
    return <Loader />;
  }

  return (
    <div className="main flex-column">
      <div className="main__carousel">
        <Carousel />
      </div>
      <div className="main__content flex-column">
        {new_products.length !== 0 && (
          <Section title="Новинки" isBreadcrumbs={false}>
            <div className="main__content_list">
              {new_products.map((product) => <ProductCard key={product.id} {...product} />)}
            </div>
          </Section>
        )}
        {hot_products.length !== 0 && (
          <Section title="Хиты продаж" isBreadcrumbs={false}>
            <div className="main__content_list">
              {hot_products.map((product) => <ProductCard key={product.id} {...product} />)}
            </div>
          </Section>
        )}
        <Benefit/>
      </div>
    </div>
  );
});

export { Main };
