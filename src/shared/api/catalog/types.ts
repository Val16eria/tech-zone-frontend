interface IPhotos {
	id: number;
	link: string;
}

interface IBaseProduct {
	id: number;
	photos: IPhotos[];
	name: string;
	price: number;
	discount: number;
	reviews_count: number;
	average_rating: number | null;
	is_favourite: boolean;
}

interface IBaseProductItems {
	items: IBaseProduct[];
}

interface IProduct extends IBaseProduct {
	description: string;
	length: number;
	width: number;
	weight: number;
	date_created: string;
	date_release: string;
	screen_type: string;
	screen_diagonal: string;
	screen_resolution: string;
	screen_format: string;
	model: string;
	operating_system: string;
	material: string;
	matrix_frequency: number;
	matrix_type: string;
	matrix_brightness: string;
	matrix_contrast: string;
	memory: number;
	memory_ram: number;
	sound_technology: string;
	headphone_output: true;
	color_main: string;
	color_other: string;
	id_provider: number;
	is_active: boolean;
	quantity: number;
}

interface ILaptops extends IProduct {
	consumption: number;
	keyboard_layout: string;
	keyboard_backlight: string;
	touchpad: string;
	fingerprint_scanner: boolean;
	hdr_support: boolean;
	type_graphics_accelerator: string;
	video_card_model: string;
	discrete_graphics: string;
	video_chip: string;
	video_memory_type: string;
	video_memory: number;
	clock_speed: number;
	voice_assistant: string;
	wifi_availability: boolean;
	wifi_standard: string;
	sound_power: string;
	hdmi_ports: boolean;
	usb_devices: string;
	battery_life: number;
}

interface ILaptopsItems {
	items: ILaptops[];
}

interface ITablets extends IProduct {
	number_cameras: number;
	camera_quality: string;
	video_format: string;
	optical_stabilization: boolean;
	front_camera_quality: string;
	pixel_density: number;
	degree_protection: string;
	processor_model: string;
	processor_frequency: number;
	number_cores: number;
	support_lte: boolean;
	sim_card_format: string;
	accumulator_type: string;
	accumulator_capacity: number;
	fast_charge: boolean;
}

interface ITabletsItems {
	items: ITablets[];
}

interface IPhones extends IProduct {
	number_cameras: number;
	camera_quality: string;
	video_format: string;
	optical_stabilization: boolean;
	front_camera_quality: string;
	operating_system: string;
	support_lte: boolean;
	sim_card_format: string;
	pixel_density: number;
	degree_protection: string;
	processor_model: string;
	processor_frequency: number;
	number_cores: number;
	accumulator_type: string;
	accumulator_capacity: number;
	fast_charge: boolean;
}

interface IPhonesItems extends IProduct {
	items: IPhones[];
}

interface ISmartWatches extends IProduct {
	material_belt: string;
	pixel_density: number;
	degree_protection: string;
	accumulator_type: string;
	accumulator_capacity: number;
	fast_charge: boolean;
}

interface ISmartWatchesItems extends ISmartWatches {
	items: ISmartWatches[];
}

interface IAccessories extends IProduct {
	color: string;
	degree_protection: string;
}

interface IAccessoriesItems extends IAccessories {
	items: IAccessories[];
}

export type {
	IPhotos,
	IBaseProduct,
	IBaseProductItems,
	ILaptops,
	ILaptopsItems,
	ITablets,
	ITabletsItems,
	IPhones,
	IPhonesItems,
	ISmartWatches,
	ISmartWatchesItems,
	IAccessories,
	IAccessoriesItems
};
