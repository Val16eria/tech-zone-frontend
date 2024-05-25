interface IPhotos {
	id: number;
	url: string;
}

interface IReviews {
	id: number;
	user: string;
	photo_url: string;
	rating: number;
	text: string;
	date_created: string;
}

interface IBaseProduct {
	id: number;
	name: string;
	price: number;
	discount: number;
	photos: IPhotos[] | null
	reviews_count: number;
	average_rating: number | null;
	is_favourite: boolean;
	is_in_cart: boolean;
}

interface IBaseProductItems {
	items: IBaseProduct[];
}

interface IProduct extends IBaseProduct {
	color_main: string;
	date_created: string;
	description: string;
	equipment: string;
	height: number;
	thickness: number;
	width: number;
	weight: number;
	material: string;
	model: string;
	reviews: IReviews[];
	type: string;
	id_provider: number;
	is_active: boolean;
	quantity: number;
}

interface ITechnicalProduct {
	color_other: string,
	date_release: string;
	headphone_output: boolean,
	memory_ram: number;
	memory: number;
	matrix_frequency: number;
	matrix_type: string;
	matrix_brightness: string;
	matrix_contrast: string;
	screen_type: string;
	screen_diagonal: string;
	screen_resolution: string;
	screen_format: string;
	sound_technology: string;
	operating_system: string;
}

interface ILaptops extends IProduct, ITechnicalProduct {
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
	microphone: boolean;
	processor_model: string;
	processor_frequency: number;
	number_cores: number;
	number_threads: number;
}

interface ITablets extends IProduct, ITechnicalProduct {
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
	sensors: string;
	communicate_module: boolean;
}

interface IPhones extends IProduct, ITechnicalProduct {
	number_cameras: number;
	camera_quality: string;
	video_format: string;
	optical_stabilization: boolean;
	front_camera_quality: string;
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
	communication_standard: string;
	sim_card_number: string;
	sensors: string;
}

interface ISmartWatches extends IProduct, ITechnicalProduct {
	material_belt: string;
	pixel_density: number;
	degree_protection: string;
	accumulator_type: string;
	accumulator_capacity: number;
	fast_charge: boolean;
	water_resistance: number;
	measurements: string;
}

interface ITelevisions extends IProduct, ITechnicalProduct {
	consumption: number;
	hdr_support: boolean;
	angle_view: string;
	voice_assistant: string;
	wifi_availability: boolean;
	wifi_standard: string;
	sound_power: string;
	subwoofer: boolean;
	sound_surround: boolean;
	codecs: string;
	hdmi_ports: boolean;
	hdmi_version: string;
	usb_ports: string;
	smartphone_control: boolean
	management_application: string;
}

interface IAccessories extends IProduct {
	features: string;
}

export type {
	IReviews,
	IPhotos,
	IBaseProduct,
	IBaseProductItems,
	ITelevisions,
	ILaptops,
	ITablets,
	IPhones,
	ISmartWatches,
	IAccessories,
};
