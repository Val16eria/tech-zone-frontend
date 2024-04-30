import { FC } from "react";
import {
	Image,
	Tabs,
	Tab
} from "@nextui-org/react";

import { IPhotos } from "@shared/api";

import "./PhotoTabs.scss";

interface IProductPhotoTabs {
	photos: IPhotos[];
}

const PhotoTabs: FC<IProductPhotoTabs> = ({ photos }) => {
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
						title={<Image width={85} height={85} src={photo.url} />}
						className="photo-tabs__tabs_tab"
					>
						<Image
							className="photo-tabs__tabs_img"
							src={photo.url}
						/>
					</Tab>
				)}
			</Tabs>
		</div>
	);
};

export { PhotoTabs };
