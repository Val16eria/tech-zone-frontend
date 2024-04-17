import axios from "axios";

const api = axios.create({
	baseURL: `${import.meta.env.VITE_BASE_URL}`,
	headers: {
		accept: "accept: application/json",
	},
	withCredentials: true,
});

export { api };
