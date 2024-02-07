import { IBaseItems } from '../../../shared/lib';

interface ICarouselItems {
	id: number;
	image: string;
	path: string;
}

interface IBenefitsItems extends IBaseItems {
	icon: string;
}

export type { ICarouselItems, IBenefitsItems };
