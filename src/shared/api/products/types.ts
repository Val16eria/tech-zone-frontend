interface ILaptops {
	id: number;
	date_created: string;
	screen_type: string;
	screen_diagonal: string;
	screen_resolution: string;
	screen_format: string;
	model: string;
	operating_system: string;
	matrix_frequency: number;
	matrix_type: string;
	matrix_brightness: string;
	matrix_contrast: string;
	sound_technology: string;
	headphone_output: true;
	name: string;
	color_main: string;
	color_other: string;
	material: string;
	date_release: string;
	memory_ram: number;
	memory: number;
	length: number;
	width: number;
	weight: number;
	description: string;
	price: number;
	id_provider: number;
	is_active: boolean;
	quantity: number;
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

export type { ILaptops, ILaptopsItems };
