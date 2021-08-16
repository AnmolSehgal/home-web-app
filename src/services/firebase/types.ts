export interface ProductDataInteface {
  productId: string;
  productName: string;
  category: string;
  section: string;
  discount: number;
  image: string;
  price: number;
  materialType: string[];
  dimension: string[];
  manufacturedDate: string;
  stock: number;
  sold: number;
  brandName: string;
  reviews: ReviewerInterface[];
  description: string;
}
export interface ReviewerInterface {
  name: string;
  description: string;
  rating: number;
}
