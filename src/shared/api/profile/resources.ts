import { AxiosResponse } from "axios";

import { api } from "../apiAxios.ts";
import { IUpdateUserFields, IUser } from "./types.ts";

const getUser = async (): Promise<IUser> => {
	const response =
		await api.get<IUser, AxiosResponse<IUser>>("/users");
	return response.data;
};

const updateUser = async (dto: IUpdateUserFields): Promise<IUser> => {
	const formData = new FormData();

	if (dto.photo) {
		formData.append("photo", dto.photo);
		delete dto.photo;
	}

	Object.entries(dto).forEach(([key, value]) => {
		formData.append(key, value);
	});

	const response =
		await api.put<IUser, AxiosResponse<IUser>>("/users", formData, {
			headers: {
				"Content-Type": "multipart/form-data"
			}
		});
	return response.data;
};

const deleteUser = async (): Promise<IUser> => {
	const response =
		await api.delete<IUser, AxiosResponse<IUser>>("/users");
	return response.data;
};

export {
	getUser,
	updateUser,
	deleteUser
};
