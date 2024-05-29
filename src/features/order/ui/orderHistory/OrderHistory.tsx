import { FC, useEffect } from "react";
import { observer } from "mobx-react-lite";
import {
	Card,
	CardBody,
	Divider
} from "@nextui-org/react";

import OrderModel from "../../model";
import { OrderProduct } from "../orderProduct";
import { OrderStatuses } from "../../lib";
import {
	Loader,
	ErrorNotice,
	Notice
} from "@shared/ui";

import OrderIcon from "@assets/svg/order-icon.svg";
import "./OrderHistory.scss";

const OrderHistory: FC = observer(() => {
	const { orderList, loading, error } = OrderModel;

	useEffect(() => {
		OrderModel.getOrders();
	}, []);

	if (loading) {
		return <Loader />;
	}

	if (error) {
		return <ErrorNotice />;
	}

	if (orderList.length === 0) {
		return <Notice
			icon={OrderIcon}
			title="У вас пока нет закзаов"
			description="Оформите свой первый заказ, чтобы отслеживать его здесь"
		/>
	}

	return (
		<div className="order-history flex-column">
			{orderList.map((orderItem) => (
				<Card
					key={orderItem.id}
					className="order-history__card"
					shadow="sm"
					radius="lg"
				>
					<CardBody className="order-history__card_body">
						<div className="order-history__body_description flex-column">
							<div className="order-history__description_number flex-column">
								<p className="order-history__number_title">Номер заказа</p>
								<p className="order-history__number_value order-history__small-txt">№ {orderItem.id}</p>
							</div>
							<p className={`
								order-history__description_status order-history__small-txt 
								order-history__status-${orderItem.status}`}
							>
								{OrderStatuses[orderItem.status]}
							</p>
						</div>
						<div className="flex-column">
							{orderItem.order_items.map((product) => (
								<div key={product.id}>
									<OrderProduct
										status={orderItem.status}
										product={product}
									/>
									{product.product !== orderItem.order_items.at(-1)?.product && <Divider className="divider" />}
								</div>
								)
							)}
						</div>
					</CardBody>
				</Card>
			))}
		</div>
	);
});

export { OrderHistory };
