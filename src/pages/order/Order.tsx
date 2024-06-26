import { FC, useEffect } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { observer } from "mobx-react-lite";
import { Input } from "@nextui-org/react";
import { toast } from "sonner";

import OrderModel from "@features/order/model";
import CartModel from "@features/cart/model";
import { PersonalDataFormData, personalDataSchema } from "@features/profile/lib";
import PersonalDataModel from "@features/profile/model";
import { PersonalDataInput } from "@features/profile/ui";
import { OrderStep } from "@features/order/ui";
import { WithAuth } from "@shared/hoc";
import { getOrderItem, clearOrder } from "@shared/lib";
import {
	Notice,
	Loader,
	Section,
	Payment,
	ErrorNotice,
	PriceSummaryCard
} from "@shared/ui";

import OrderIcon from "@assets/svg/order-icon.svg";
import "./Order.scss"

const Order: FC = WithAuth(observer(() => {
	const { user} = PersonalDataModel;
	const userError = PersonalDataModel.error;
	const userLoading = PersonalDataModel.loading;
	const { url } = OrderModel;
	const orderError = OrderModel.error;
	const orderLoading = OrderModel.loading;
	const orderItem = getOrderItem();

	const {
		register,
		handleSubmit,
		setValue,
		formState: { errors }} = useForm<PersonalDataFormData>({
		resolver: yupResolver(personalDataSchema)
	});

	useEffect(() => {
		PersonalDataModel.getPersonalData();
	}, []);

	useEffect(() => {
		if (url) {
			const newWindow = window.open(url, "_blank", "noopener,noreferrer");
			if (!newWindow || newWindow.closed || typeof newWindow.closed === "undefined") {
				setTimeout(() => {
					window.location.href = url;
				}, 100);
			}
		}
	}, [url]);

	useEffect(() => {
		CartModel.getCart();
	}, [orderItem]);

	const onSubmit = () => {
		if (!orderItem) return;

		const selectedIds = orderItem.selectedIds.map(Number);

		toast.promise(OrderModel.create({
			ids_order_items: selectedIds,
			cost: orderItem.totalPrice,
			payment_method: localStorage.getItem("payment")!
		}), {
			loading: "Загрузка...",
			success: "Ваш заказ успешно оформлен",
			error: "Ошибка офорлмения заказа. Попробуйте еще раз"
		});
		clearOrder();
	};

	useEffect(() => {
		setValue("first_name", user?.first_name || "");
		setValue("last_name", user?.last_name || "");
		setValue("phone_number", user?.phone_number || "");
	}, [user, setValue]);

	if (userLoading || orderLoading) {
		return <Loader />;
	}

	if (userError || orderError) {
		return <ErrorNotice />;
	}

	return (
		<Section title="Оформление заказа" isBreadcrumbs={true}>
			{orderItem ? (
				<form className="order" onSubmit={handleSubmit(onSubmit)}>
					<div className="order__steps flex-column">
						<OrderStep stepNumber={1} title="Данные покупателя">
							<div className="order__steps_list flex-column">
								<PersonalDataInput
									type="text"
									variant="bordered"
									label="Имя"
									defaultValue={user?.first_name ?? ""}
									isInvalid={!!errors.first_name?.message}
									errorMessage={errors.first_name?.message ?? ""}
									{...register("first_name")}
								/>
								<PersonalDataInput
									type="text"
									variant="bordered"
									label="Фамилия"
									defaultValue={user?.last_name ?? ""}
									isInvalid={!!errors.last_name?.message}
									errorMessage={errors.last_name?.message ?? ""}
									{...register("last_name")}
								/>
								<PersonalDataInput
									type="tel"
									variant="bordered"
									label="Телефон"
									defaultValue={user?.phone_number ?? ""}
									isInvalid={!!errors.phone_number?.message}
									errorMessage={errors.phone_number?.message ?? ""}
									{...register("phone_number")}
								/>
								<Input
									isDisabled
									type="email"
									value={user?.email}
									variant="bordered"
									label="Email"
								/>
							</div>
						</OrderStep>
						<OrderStep stepNumber={2} title="Способы оплаты">
							<Payment />
						</OrderStep>
					</div>
					<div className="order__card">
						<PriceSummaryCard
							title="Ваш заказ"
							products={orderItem?.selectedProducts}
							totalDiscount={orderItem?.totalDiscount}
							totalPrice={orderItem?.totalPrice}
							isDisable={false}
						/>
					</div>
				</form>
			) : (
				<Notice
					icon={OrderIcon}
					title="У вас пока нет заказов"
					description="Перейдите в корзину и оформите заказ или отслеживайте статусы ваших заказов в личном профиле"
				/>
			)}
		</Section>
	);
}));

export { Order };
