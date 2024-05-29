import { FC, useEffect } from "react"
import { useParams } from "react-router-dom";
import { observer } from "mobx-react-lite";
import { Card, CardBody } from "@nextui-org/react";

import ProductModel from "@features/product/model";
import {
	DescriptionTabs,
	Parameter,
	PhotoTabs
} from "@features/product/ui";
import { LikeButton } from "@features/favourites/ui";
import { CartButton } from "@features/cart/ui";
import {
	Loader,
	Section,
	Stars,
	Review,
	ErrorNotice
} from "@shared/ui"
import { discountedPrice } from "@shared/lib";

import "./Product.scss";

const Product: FC = observer(() => {

	const { id } = useParams();
	const { product, loading, error } = ProductModel;

	useEffect(() => {
		const displayProduct = async () => {
			const productId = Number(id);
			await ProductModel.getProductType(productId);
			await ProductModel.getProduct(productId);
		}

		displayProduct();
	}, [id]);

	if (loading || !product) {
		return <Loader />
	}

	if (error) {
		return <ErrorNotice />;
	}

	return (
		<Section title={product.name} isBreadcrumbs={true}>
			<div className="product flex-column">
				<div className="justify-between flex-row items-center">
					<div className="flex-row items-center gap-5">
						<Stars rating={product.average_rating}/>
						<Review reviews={product.reviews_count}/>
					</div>
					<div className="product__id flex-row">
						<p className="product__id_txt product__id_title">Код товара:</p>
						<p className="product__id_txt">{id}</p>
					</div>
				</div>
				<div className="product__content">
					<PhotoTabs photos={product.photos}/>
					<Card className="product__card" shadow="sm">
						<CardBody className="product__card_body flex-column">
							<div className="product__body_item flex-column">
								<Parameter/>
								<Parameter/>
							</div>
							<div className="product__body_item flex-column">
								<div className="product__body_price flex-row">
									<div className="flex-column">
										{!!product.discount && (<p className="product__price_txt">{`${product.price} ₽`}</p>)}
										<p className="product__discount_txt">
											{`${discountedPrice(product.price, product.discount) || product.price} ₽`}
										</p>
									</div>
									{!!product.discount && (
										<p className="product__discount-persent">
											Скидка: <span className="product__discount-persent_txt">{product.discount} %</span>
										</p>
									)}
								</div>
								<div className="product__btns flex-row">
									<LikeButton id_product={product.id} />
									<CartButton id_product={product.id} />
								</div>
							</div>
						</CardBody>
					</Card>
				</div>
				<p className="product__description">
					{product.description}
				</p>
				<DescriptionTabs />
			</div>
		</Section>
	);
});

export { Product };
