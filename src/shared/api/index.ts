export {
	getAllTelevisions,
	getAllLaptops,
	getAllTablets,
	getAllPhones,
	getAllSmartWatches,
	getAllAccessories,
} from "./catalog";
export { sendAuthentication, authentication } from "./auth";
export {
	getProductTypeById,
	getTelevisionById,
	getLaptopById,
	getTabletById,
	getPhoneById,
	getSmartWatchById,
	getAccessoryById
} from "./product";
export { getAllFavourites } from "./favourites";
export {
	getUser,
	updateUser,
	deleteUser
} from "./profile";

export type { IProductType, TProductType } from "./product";
export type {
	IReviews,
	IPhotos,
	IBaseProduct,
	ITelevisions,
	ILaptops,
	ITablets,
	IPhones,
	ISmartWatches,
	IAccessories
} from "./catalog";
export type { IUser, IUpdateUserFields } from "./profile";
