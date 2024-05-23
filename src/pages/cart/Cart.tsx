import {
	FC,
	useEffect,
	useState
} from "react";
import { observer } from "mobx-react-lite";
import {
	Button,
	Card,
	CardBody,
	CardFooter,
	Checkbox,
	CheckboxGroup,
	Divider,
	Image
} from "@nextui-org/react";

import CartModel from "@features/cart/model";
import { CartProduct } from "@features/cart/ui";
import { WithAuth } from "@shared/hoc";
import {
	Empty,
	Loader,
	Section
} from "@shared/ui";

import CartIcon from "@assets/svg/cart-icon.svg";
import DeleteIcon from "@assets/svg/delete-icon.svg";
import "./Cart.scss";

const Cart: FC = WithAuth(observer(() => {
	const [selected, setSelected] = useState<string[]>([]);
	const [totalPrice, setTotalPrice] = useState<number>(0);
	const [totalDiscount, setTotalDiscount] = useState<number>(0);
	const { cart, loading } = CartModel;

	useEffect(() => {
		calculateTotals();
	}, [selected, cart]);

	const calculateTotals = () => {
		let calculatedTotalPrice = 0;
		let calculatedTotalDiscount = 0;

		selected.forEach((id) => {
			const product = cart.find((item) => item.product.id.toString() === id);
			if (product) {
				const productTotalPrice = product.product.price * product.quantity;
				const productDiscount = productTotalPrice * (product.product.discount / 100);
				calculatedTotalPrice += productTotalPrice - productDiscount;
				calculatedTotalDiscount += productDiscount;
			}
		});

		setTotalPrice(Math.floor(calculatedTotalPrice));
		setTotalDiscount(Math.floor(calculatedTotalDiscount));
	};

	const deleteAllProducts = () => {
		cart.map((product) => CartModel.deleteProduct(product.product.id));
		CartModel.getCart();
	};

	const handleSelectAll = () => {
		if (selected.length === cart.length) {
			setSelected([]);
		} else {
			const allProductIds = cart.map(product => product.product.id.toString());
			setSelected(allProductIds);
		}
	};

	if (loading) {
		return <Loader />;
	}

	return (
		<Section
			title="Корзина"
			isBreadcrumbs={true}
			productsCount={cart.length}
		>
			{cart.length ? (
				<div className="cart">
					<div className="cart__content flex-column">
						<div className="cart__content_products flex-row">
							<Checkbox
								className="p-0 m-0"
								isSelected={selected.length === cart.length}
								onChange={handleSelectAll}
							>
								Выбрать все
							</Checkbox>
							<Button
								className="p-0"
								color="primary"
								variant="light"
								disableAnimation={true}
								aria-label="delete all"
								startContent={
									<Image
										className="small-action-btn"
										src={DeleteIcon}
										alt="delete"
									/>}
								onClick={deleteAllProducts}
							>
								Удалить все
							</Button>
						</div>
						<CheckboxGroup value={selected} onValueChange={setSelected}>
							{cart.map((product) => (
								<div key={product.id}>
									<Checkbox
										className="cart__checkbox p-0 m-0 flex max-w-none items-center"
										value={product.product.id.toString()}
									>
										<CartProduct cartProduct={product} />
									</Checkbox>
									{product.product !== cart.at(-1)?.product && <Divider className="cart__divider" />}
								</div>
							))}
						</CheckboxGroup>
					</div>
					<Card fullWidth className="cart__card">
						<CardBody className="cart__card_body flex-column">
							<div className="cart__card_body-txt flex-row">
								<p className="cart__card_body-discount">Скидка</p>
								<p className="cart__card_body-discount">{totalDiscount.toFixed(0)} ₽</p>
							</div>
							<div className="cart__card_body-txt flex-row">
								<p className="cart__card_body-price">Итого</p>
								<p className="cart__card_body-price">{totalPrice.toFixed(0)} ₽</p>
							</div>
						</CardBody>
						<CardFooter>
							<Button fullWidth color="primary">Оформить заказ</Button>
						</CardFooter>
					</Card>
				</div>
			) : (
				<Empty
					icon={CartIcon}
					title="У вас пока нет товаров в корзине"
					description="Добавьте товары в корзину"
				/>
			)}
		</Section>
	);
}));

export { Cart };
