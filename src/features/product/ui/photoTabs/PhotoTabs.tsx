import { FC } from "react";
import {
	Image,
	Tabs,
	Tab
} from "@nextui-org/react";

import { IPhotos } from "@shared/api";
import { DefaultImage } from "@shared/ui";

import "./PhotoTabs.scss";

interface IProductPhotoTabs {
	photos: IPhotos[] | null;
}

const PhotoTabs: FC<IProductPhotoTabs> = ({ photos }) => {
	if (!photos || !photos.length) {
		return (
			<div className="photo-tabs__tabs_img">
				<DefaultImage />
			</div>
		);
	}

	if (photos.length === 1) {
		return (
			<Image
				className="photo-tabs__tabs_img"
				src={photos[0].url}
			/>
		);
	}

	return (
		<div className="photo-tabs">
			<Tabs
				aria-label="Dinamic tabs"
				variant="light"
				items={photos}
				className="photo-tabs__tabs"
			>
				{(photo) => (
					<Tab
						key={photo.id}
						className="photo-tabs__tabs_tab"
						title={<Image className="photo-tabs__tab_img" radius="none" src={photo.url} />}
					>
						<Image
							className="photo-tabs__tabs_img"
							radius="none"
							src={photo.url}
						/>
					</Tab>
				)}
			</Tabs>
		</div>
	);
};

export { PhotoTabs };
