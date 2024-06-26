import { FC, useState } from "react";
import { Tab, Tabs } from "@nextui-org/react";

import { PersonalData } from "@features/profile/ui";
import { OrderHistory } from "@features/order/ui";
import { WithAuth } from "@shared/hoc";

import "./Profile.scss";

const Profile: FC = WithAuth(() => {
	const [selected, setSelected] =
		useState(localStorage.getItem("position" || "personal"));

	return (
		<div className="profile flex-col">
			<Tabs
				className="profile__tabs"
				aria-label="Options"
				color="default"
				variant="underlined"
				selectedKey={selected}
				onSelectionChange={(select) => {
					setSelected(select.toString());
					localStorage.setItem("position", select.toString());
				}}
			>
				<Tab
					className={`profile__tabs_tab ${selected !== "personal" && "profile__tabs_tab-inactive"}`}
					key="personal"
					title="Личные данные"
				>
					<PersonalData />
				</Tab>
				<Tab
					className={`profile__tabs_tab ${selected !== "orders" && "profile__tabs_tab-inactive"}`}
					key="orders"
					title="Заказы"
				>
					<OrderHistory />
				</Tab>
			</Tabs>
		</div>
	);
});

export { Profile };
