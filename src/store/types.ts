import { ReviewerInterface } from "../services/firebase/types";

export interface LoginState {
  loginSuccess: boolean;
  otpSuccess: boolean;
}

export interface StateInterface {
  signIn: LoginState;
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
