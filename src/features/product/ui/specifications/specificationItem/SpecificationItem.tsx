import { FC } from "react";
import { observer } from "mobx-react-lite";

import { ISpecification } from "../../../lib";

import "./SpecificationItem.scss";

interface ISpecificationItem {
	specification: ISpecification;
}

const SpecificationItem: FC<ISpecificationItem> = observer(({ specification }) => {
	const halfwayIndex = Math.ceil(specification.points.length / 2);

	const firstColumnPoints = specification.points.slice(0, halfwayIndex);
	const secondColumnPoints = specification.points.slice(halfwayIndex);

	return (
		<div className="specification-item flex-column">
			<p className="specification-item__title">{specification.title}</p>
			<div className="specification-item__list">
				<div className="specification-item__column flex-column">
					{firstColumnPoints.map((point, index) => (
						<>
						{point.value && (
							<div key={index} className="specification-item__column_list flex-row">
								<p className="specification-item__list_txt specification-item__list_label">
									{`${point.label}`}
								</p>
								<span className="specification-item__list_dot"/>
								<p className="specification-item__list_txt specification-item__list_value flex-grow">
									{`${point.value}`}
								</p>
							</div>
						)}
						</>
					))}
				</div>
				<div className="specification-item__column flex-column">
					{secondColumnPoints.map((point, index) => (
						<>
						{
							point.value && (
								<div key={index} className="specification-item__column_list flex-row">
									<p className="specification-item__list_txt specification-item__list_label">
										{`${point.label}`}
									</p>
									<span className="specification-item__list_dot"/>
									<p className="specification-item__list_txt specification-item__list_value flex-grow">
										{`${point.value}`}
									</p>
								</div>
							)
						}
						</>
					))}
				</div>
			</div>
		</div>
	);
});

export {SpecificationItem};
