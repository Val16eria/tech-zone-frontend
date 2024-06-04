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
	IColorVariants,
	IMemoryVariants,
	IBaseProductMeta,
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
	IOrderPayment,
	IOrder,
	ICreateOrder
} from "./order";

export {
	getBanners,
	getAllProducts,
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
	IBanner,
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
