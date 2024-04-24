export {
	getAllLaptops,
	getAllTablets,
	getAllPhones,
	getAllSmartWatches,
	getAllAccessories,
} from "./catalog";
export { sendAuthentication, authentication } from "./auth";
export { getProductTypeById, getProductById } from "./product";
export { getAllFavourites } from "./favourites";

export type { IProductType, TProductType } from "./product";
export type {
	IPhotos,
	IBaseProduct,
	ILaptops,
	ITablets,
	IPhones,
	ISmartWatches,
	IAccessories
} from "./catalog";
