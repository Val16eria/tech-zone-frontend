import {FC, HTMLAttributes} from 'react';

interface IFavourite extends HTMLAttributes<HTMLImageElement> {
	isLiked: boolean;
}

const Favourite:FC<IFavourite> = ({ isLiked, className }) => {
	return (
		<svg className={className} width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
			<path
				d="M21.032 34.6832C20.4654 34.8832 19.532 34.8832 18.9654 34.6832C14.132 33.0332 3.33203 26.1498 3.33203 14.4832C3.33203 9.33317 7.48203 5.1665 12.5987 5.1665C15.632 5.1665 18.3154 6.63317 19.9987 8.89984C21.682 6.63317 24.382 5.1665 27.3987 5.1665C32.5154 5.1665 36.6654 9.33317 36.6654 14.4832C36.6654 26.1498 25.8654 33.0332 21.032 34.6832Z"
				fill={isLiked ? '#006FEE' : undefined} stroke="#006FEE" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
		</svg>
	);
};

export { Favourite };