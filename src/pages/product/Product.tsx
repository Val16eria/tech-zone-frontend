import {
	FC,
	useEffect,
	useState
} from "react"
import { useParams } from "react-router-dom";
import { observer } from "mobx-react-lite";
import { Card, CardBody } from "@nextui-org/react";

import ProductModel from "@features/product/model";
import { ProductParameter } from "@features/product/ui";
import { LikeButton } from "@features/favourites/ui";
import {
	Loader,
	ProductRating,
	Section
} from "@shared/ui"
import {
	IAccessories,
	ILaptops,
	IPhones,
	ISmartWatches,
	ITablets
} from "@shared/api";
import { discountedPrice } from "@shared/lib";

import "./Product.scss";
import { CartButton } from "@features/cart/ui";
const Product: FC = observer(() => {

	const { id } = useParams();
	const [product, setProduct] =
		useState<ILaptops | ITablets | IPhones | ISmartWatches | IAccessories | null>(null);

	useEffect(() => {
		const displayProduct = async () => {
			const productId = Number(id);

			await ProductModel.getProduct(productId);
			await ProductModel.getProductType(productId);
			switch (ProductModel.productType) {
				case "laptop":
					setProduct(ProductModel.product as ILaptops);
					break;
				case "tablet":
					setProduct(ProductModel.product as ITablets);
					break;
				case "smartphone":
					setProduct(ProductModel.product as IPhones);
					break;
				case "smartwatch":
					setProduct(ProductModel.product as ISmartWatches);
					break;
				case "accessory":
					setProduct(ProductModel.product as IAccessories);
					break;
				default:
					setProduct(null);
					break;
			}
		}

		displayProduct();
	}, [id]);

	if (ProductModel.loading || !product) {
		return <Loader />
	}

	return (
		<Section title={product.name} isBreadcrumbs={true}>
			<div className="product">
				<div className="justify-between flex-row items-center">
					<div className="flex-row items-center gap-5">
						<ProductRating reviews_count={product.reviews_count} average_rating={product.average_rating} />
					</div>
					<p>Код товара: <b>{id}</b></p>
				</div>
				<div className="flex-row items-center gap-5">
					<div>фото</div>
					<Card className="product__card" shadow="sm">
						<CardBody className="product__card_body flex-column">
							<div className="product__body_item flex-column">
								<ProductParameter />
								<ProductParameter />
							</div>
							<div className="product__body_item flex-column">
								<div className="product__body_price flex-row">
									<div className="flex-column">
										{!!product.discount && <p className="product__price_txt">{`${product.price} ₽`}</p>}
										<p className="product__discount_txt">
											{`${discountedPrice(product.price, product.discount) || product.price} ₽`}
										</p>
									</div>
									<p className="product__discount-persent">
										Скидка: <span className="product__discount-persent_txt">{product.discount} %</span>
									</p>
								</div>
								<div className="product__btns flex-row">
									<LikeButton product_id={product.id} is_favourite={product.is_favourite} />
									<CartButton />
								</div>
							</div>
						</CardBody>
					</Card>
				</div>
			</div>
		</Section>
	);
});

export { Product };
