import { FC, PropsWithChildren } from "react";
import { BreadcrumbItem, Breadcrumbs } from "@nextui-org/react";

import "./Section.scss";

interface ISection {
	title: string;
	isBreadcrumbs: boolean;
	productsCount?: string;
}

const Section: FC<PropsWithChildren<ISection>> = (
	{
		title,
		isBreadcrumbs,
		productsCount,
		children
	}) => {

	return (
		<div className="section flex-column">
			<div className="section__article flex-column">
				{isBreadcrumbs && (
					<Breadcrumbs>
						<BreadcrumbItem href="/">Главная</BreadcrumbItem>
						<BreadcrumbItem>{title}</BreadcrumbItem>
					</Breadcrumbs>
				)}

				<div className="section__article_header flex-row">
					<p className="section__header_title section__header_txt">{title}</p>
					{productsCount && (
						<p className="section__header_count section__header_txt">
							{productsCount}
						</p>
					)}
				</div>
			</div>
			{children}
		</div>
	);
};

export {Section};
