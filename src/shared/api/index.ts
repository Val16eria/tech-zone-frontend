export {
	getAllLaptops,
	getAllTablets,
	getAllPhones,
	getAllSmartWatches,
	getAllAccessories,
} from "./catalog";
export { sendAuthentication, authentication } from "./auth";
export {
	getProductTypeById,
	getProductById,
	getLaptopById,
	getTabletById,
	getPhoneById,
	getSmartWatchById,
	getAccessoryById
} from "./product";
export { getAllFavourites } from "./favourites";

export type { IProductType, TProductType } from "./product";
export type {
	IReviews,
	IPhotos,
	IBaseProduct,
	ILaptops,
	ITablets,
	IPhones,
	ISmartWatches,
	IAccessories
} from "./catalog";
