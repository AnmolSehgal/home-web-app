import { ReviewerInterface } from "../services/firebase/types";

export interface LoginState {
  loginSuccess: boolean;
  otpSuccess: boolean;
}

export interface StateInterface {
  products: ProductStateInterface;
  signIn: LoginState;
  wishlist: WishlistStateInterface;
  cart: CartStateInterface;
}

export interface ProductDataInterface {
  productId: string;
  productName: string;
  category: string;
  section: string;
  discount: number;
  image: string;
  price: number;
  materialType: string[];
  dimension: string;
  manufacturedDate: string;
  stock: number;
  sold: number;
  brandName: string;
  Reviews: ReviewerInterface[];
  Description: string;
}
export interface ProductStateInterface {
  data: ProductDataInterface[];
  dataSuccess: boolean;
}

export interface WishlistStateInterface {
  list: WishListObjectInterface[];
  loadSpinner: boolean;
}
export interface WishListObjectInterface {
  productId: string;
  productName: string;
  image: string;
  price: number;
  discount: number;
  stock: number;
}
export interface TableObjectInterface {
  productId: string;
  productName: string;
  image: string;
  price: number;
  discount: number;
  addToCart?: (productId: string, quantity: number) => void;
  removeItem: () => void;
  changeQuantity?: (productId: string, quantity: number) => void;
  quantity?: number;
  stock: number;
}

export interface CartStateObject {
  productId: string;
  productName: string;
  image: string;
  price: number;
  discount: number;
  stock: number;
  quantity: number;
}

export interface CartStateInterface {
  itemList: CartStateObject[];
  loadSpinner: boolean;
}
