interface IUpdateUserFields {
	photo?: File | string;
	last_name?: string;
	first_name?: string;
	phone_number?: string;
}

interface IUser {
	id: number;
	email: string;
	last_name: string;
	photo_url: string
	first_name: string;
	phone_number: string;
	date_created: string;
}

export type { IUpdateUserFields, IUser };
