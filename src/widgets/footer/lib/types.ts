import { ISectionItems } from '../../header/lib/types.ts';
import { IBaseItems } from '../../../shared/lib';

interface IFooterItems {
	id: number;
	title: string;
	sections: ISectionItems[] | IBaseItems[];
}

export type { IFooterItems };
