export { sendAuthentication, authentication } from "./auth";

export {
	getAllCart,
	addProductInCart,
	deleteProductInCart,
	deleteAllProductInCart,
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

export {
	createOrder,
	getOrderList,
	getOrderById
} from "./order";
export type {
	IOrderProduct,
	TOrderStatus,
	IOrderInfo,
	IOrder,
	ICreateOrder
} from "./order";

export {
	getFilterByModel,
	getProductBySearch,
	getSuggestions,
	getProductTypeById,
	getTelevisionById,
	getLaptopById,
	getTabletById,
	getPhoneById,
	getSmartWatchById,
	getAccessoryById
} from "./product";
export type {
	IFilterVariantsPrice,
	IFilter,
	IProductType,
	TProductType,
	ISearch
} from "./product";

export {
	getUser,
	updateUser,
	deleteUser,
	deletePhotoUser
} from "./profile";
export type { IUser, IUpdateUserFields } from "./profile";

export {
	getReviewById,
	updateReviewById,
	createReviewById
} from "./review";
export type { IReview, IBaseReview } from "./review";
