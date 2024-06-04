import { FC, useState } from "react";
import { Image } from "@nextui-org/react";

import { IPhotos } from "@shared/api";
import { ArrowButton, DefaultImage } from "@shared/ui";

import "./PhotoTabs.scss";

interface IProductPhotoTabs {
	photos: IPhotos[] | null;
}

const PhotoTabs: FC<IProductPhotoTabs> = ({ photos }) => {
	const [activeIndex, setActiveIndex] = useState(0);
	const [startIndex, setStartIndex] = useState(0);
	const photosPerPage = 3;
	const visiblePhotos = photos ? photos.slice(startIndex, startIndex + photosPerPage) : [];

	if (!photos || !photos.length) {
		return (
			<div className="photo-tabs__main_img">
				<DefaultImage />
			</div>
		);
	}

	if (photos.length === 1) {
		return (
			<Image
				className="photo-tabs__main_img"
				src={photos[0].url}
			/>
		);
	}

	const handleNext = () => {
		setStartIndex((prevIndex) => Math.min(prevIndex + photosPerPage, photos.length - photosPerPage));
	};

	const handlePrev = () => {
		setStartIndex((prevIndex) => Math.max(prevIndex - photosPerPage, 0));
	};

	const handleImageClick = (index: number) => {
		setActiveIndex(index);
	};

	return (
		<div className="photo-tabs">
			<div className="photo-tabs__controls">
				{photos.length > photosPerPage && (
					<ArrowButton
						direction="left"
						action={handlePrev}
						className="photo-tabs__nav_button photo-tabs__nav_button--prev"
						disabled={startIndex === 0}
					/>
				)}
				<div className="photo-tabs__thumbnails">
					{visiblePhotos.map((photo, index) => (
						<Image
							key={photo.id}
							className={`photo-tabs__thumbnail ${activeIndex === startIndex + index ? "active" : ""}`}
							radius="none"
							src={photo.url}
							onClick={() => handleImageClick(startIndex + index)}
						/>
					))}
				</div>
				{photos.length > photosPerPage && (
					<ArrowButton
						direction="right"
						action={handleNext}
						className="photo-tabs__nav_button photo-tabs__nav_button--next"
						disabled={startIndex + photosPerPage >= photos.length}
					/>
				)}
			</div>
			<div className="photo-tabs__main">
				<Image
					className="photo-tabs__main_img"
					radius="none"
					src={photos[activeIndex].url}
				/>
			</div>
		</div>
	);
};

export {PhotoTabs};
