interface IPoints {
	label: string;
	value: unknown;
}

interface ISpecification {
	title: string;
	points: IPoints[];
}

export type { ISpecification };
