import { FC, PropsWithChildren } from "react";
import { BreadcrumbItem, Breadcrumbs } from "@nextui-org/react";

import { IBaseProduct } from "@shared/api";
import { wordFormat } from "@shared/lib";
import { Empty, ProductCard } from "@shared/ui";

import "./Section.scss";

interface ISection {
	title: string;
	isShow: boolean;
	icon?: string;
	products: IBaseProduct[];
}

const Section: FC<PropsWithChildren<ISection>> = (
	{
		title,
		isShow,
		icon,
		products,
		children
	}) => {

	if (!isShow && !products.length) {
		return;
	}

	return (
		<div className="section custom-container flex-column">
			{isShow && (
				<Breadcrumbs>
					<BreadcrumbItem href="/">Главная</BreadcrumbItem>
					<BreadcrumbItem>{title}</BreadcrumbItem>
				</Breadcrumbs>
			)}

			{products.length ? (
				<div className="flex-column gap-6">
					<div className="section__header flex-row">
						<p className="section__header_title section__header_txt">{title}</p>
						{isShow && (<p className="section__header_count section__header_txt">
							{products.length} {wordFormat(products.length, "товар", "", "а", "ов")}
						</p>)}
					</div>
					<div className="section__content flex-row">
						{children}
						<div className="section__content_list flex-row">
							{products.map((product) =>
								<ProductCard
									key={product.id}
									id={product.id}
									images={[]}
									estimation={23}
									reviews={56}
									name={product.name}
									price={product.price}
									discounted_price="78999"
								/>
							)}
						</div>
					</div>
				</div>
			) : (
				<Empty
					icon={icon ?? ""}
					title="На данный момент товаров нет"
					description="Следите за обновлениями, чтобы не пропустить новые товары"
				/>
			)}
		</div>
	);
};

export { Section };
