import {
	FC,
	useCallback, useEffect,
	useMemo,
	useState
} from "react";
import { useNavigate } from "react-router-dom";
import { observer } from "mobx-react-lite";
import {
	Button,
	Checkbox,
	CheckboxGroup,
	Image, useDisclosure
} from "@nextui-org/react";
import { toast, Toaster } from "sonner";

import CartModel from "@features/cart/model";
import { ModalDeleteProduct, CartProductItem } from "@features/cart/ui";
import { WithAuth } from "@shared/hoc";
import { setOrderItem } from "@shared/lib";
import {
	Notice,
	Section,
	ErrorNotice,
	PriceSummaryCard, Loader
} from "@shared/ui";

import CartIcon from "@assets/svg/cart-icon.svg";
import DeleteIcon from "@assets/svg/delete-icon.svg";
import "./Cart.scss";

const Cart: FC = WithAuth(observer(() => {
	const navigate = useNavigate();

	const { isOpen, onOpen, onOpenChange } = useDisclosure();
	const [selected, setSelected] = useState<string[]>([]);
	const { cart, loading, error } = CartModel;

	useEffect(() => {
		CartModel.getCart();
	}, []);

	const calculateTotals = useCallback(() => {
		let calculatedTotalPrice = 0;
		let calculatedTotalDiscount = 0;

		selected.forEach((id) => {
			const product = cart.find((item) => item.id.toString() === id);
			if (product) {
				const productTotalPrice = product.product.price * product.quantity;
				const productDiscount = productTotalPrice * (product.product.discount / 100);
				calculatedTotalPrice += productTotalPrice - productDiscount;
				calculatedTotalDiscount += productDiscount;
			}
		});

		return {
			totalPrice: Math.floor(calculatedTotalPrice),
			totalDiscount: Math.floor(calculatedTotalDiscount)
		};
	}, [selected, cart]);

	const { totalPrice, totalDiscount } = useMemo(() => calculateTotals(), [calculateTotals]);

	const onSubmit = () => {
		const selectedProducts = cart.filter(product => selected.includes(product.id.toString()));
		setOrderItem(selectedProducts, totalDiscount, totalPrice);
		navigate("/order");
	};

	const openModal = () => {
		if (selected.length) {
			onOpen();
		} else {
			toast.error("Выберите товары, которые хотите удалить");
		}
	};

	const deleteProducts = () => {
		const selectedProducts = cart.filter(product => selected.includes(product.id.toString()));
		selectedProducts.forEach((product) => CartModel.deleteProduct(product.product.id));
		CartModel.getCart();
	};

	const handleSelectAll = () => {
		if (selected.length === cart.length) {
			setSelected([]);
		} else {
			const orderItems = cart.map(product => product.id.toString());
			setSelected(orderItems);
		}
	};

	if (loading) {
		return <Loader />;
	}

	if (error) {
		return <ErrorNotice />;
	}

	return (
		<>
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
									onClick={openModal}
								>
									Удалить все
								</Button>
								<ModalDeleteProduct
									isOpen={isOpen}
									onOpenChange={onOpenChange}
									onAction={deleteProducts}
								/>
							</div>
							<CheckboxGroup value={selected} onValueChange={setSelected}>
								{cart.map((product) => (
									<CartProductItem key={product.id} product={product} />
								))}
							</CheckboxGroup>
						</div>
						<PriceSummaryCard
							totalDiscount={totalDiscount}
							totalPrice={totalPrice}
							isDisable={!selected.length}
							onSubmit={onSubmit}
						/>
					</div>
				) : (
					<Notice
						icon={CartIcon}
						title="У вас пока нет товаров в корзине"
						description="Добавьте товары в корзину"
					/>
				)}
			</Section>
			<Toaster />
		</>
	);
}));

export { Cart };
