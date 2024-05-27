import { AxiosResponse } from "axios";

import { api } from "../apiAxios.ts";
import { IBaseReview, IReview } from "./types.ts";

const getReviewById = async (id: number): Promise<IReview> => {
	const response =
		await api.get<IReview, AxiosResponse<IReview>>(`/reviews/${id}`);
	return response.data;
};

const updateReviewById = async (dto: Partial<IBaseReview>, id: number): Promise<IReview> => {
	const response =
		await api.patch<IReview, AxiosResponse<IReview>>(`/review/${id}`, { ...dto });
	return response.data;
};

const createReviewById = async (dto: IBaseReview, id: number) => {
	const response =
		await api.post<IReview, AxiosResponse<IReview>>(`/reviews/${id}`, { ...dto });
	return response.data;
};

export {
	getReviewById,
	updateReviewById,
	createReviewById
};
