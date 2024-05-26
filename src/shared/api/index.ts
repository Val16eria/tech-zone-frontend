export { sendAuthentication, authentication } from "./auth";

export {
	getAllCart,
	addProductInCart,
	deleteProductInCart,
	updateProductCart
} from "./cart";
export type { ICart, ICartProduct } from "./cart";

export {
	getAllTelevisions,
	getAllLaptops,
	getAllTablets,
	getAllPhones,
	getAllSmartWatches,
	getAllAccessories,
} from "./catalog";
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

export {
	getAllFavourites,
	addFavouriteProduct,
	deleteFavouriteProduct
} from "./favourites";
export type { IFavourites } from "./favourites";

export { createOrder } from "./order";
export type {
	IOrderInfo,
	IOrder,
	ICreateOrder
} from "./order";

export {
	getProductTypeById,
	getTelevisionById,
	getLaptopById,
	getTabletById,
	getPhoneById,
	getSmartWatchById,
	getAccessoryById
} from "./product";
export type { IProductType, TProductType } from "./product";

export {
	getUser,
	updateUser,
	deleteUser
} from "./profile";
export type { IUser, IUpdateUserFields } from "./profile";
