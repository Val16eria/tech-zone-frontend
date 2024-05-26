import { FC, useEffect } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { observer } from "mobx-react-lite";
import { Input, useDisclosure } from "@nextui-org/react";
import { toast, Toaster } from "sonner";

import OrderModel from "@features/order/model";
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

import CartIcon from "@assets/svg/cart-icon.svg";
import "./Order.scss"

const Order: FC = WithAuth(observer(() => {
	const { isOpen, onOpen, onOpenChange } = useDisclosure();
	const { user, loading} = PersonalDataModel;
	const userError = PersonalDataModel.error;
	const orderError = OrderModel.error;
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

	const onSubmit = () => {
		if (!isOpen) {
			const selectedIds = orderItem.selectedIds.map(Number);
			toast.promise(OrderModel.create({ ids_order_items: selectedIds, payment_method: "cash" }), {
				loading: "Загрузка...",
				success: "Ваш заказ успешно оформлен",
				error: "Ошибка офорлмения заказа. Попробуйте еще раз"
			});
			clearOrder();
		}
	};

	useEffect(() => {
		setValue("first_name", user?.first_name || "");
		setValue("last_name", user?.last_name || "");
		setValue("phone_number", user?.phone_number || "");
	}, [user, setValue]);

	if (loading) {
		return <Loader />;
	}

	if (userError || orderError) {
		return <ErrorNotice />;
	}

	return (
		<>
			<Section title="Оформление заказа" isBreadcrumbs={true}>
				{orderItem?.selectedProducts ? (
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
								<Payment
									isOpen={isOpen}
									onOpen={onOpen}
									onOpenChange={onOpenChange}
								/>
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
						icon={CartIcon}
						title="У вас пока нет заказов"
						description="Перейдите в корзину и оформите заказ"
					/>
				)}
			</Section>
			<Toaster />
		</>
	);
}));

export { Order };
