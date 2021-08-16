import { CardComponentInterface } from "./types";
import image from "../icons/image1.jpg";

export const CardComponent = ({
  productID,
  brandName,
  productName,
  discount,
  price,
}: CardComponentInterface) => {
  return (
    <div className="flex flex-col border items-center border-text-300 w-64 rounded ">
      <img className=" w-72 h-60" src={image} alt={productName} />
      <div>{productName}</div>
      <div className="text-text-700">by {brandName}</div>
      {discount > 0 ? (
        <div>
          <span>Rs. {price - (price * discount) / 100}</span>
          <span className="ml-2 line-through text-text">{price}</span>
        </div>
      ) : (
        <span>{price}</span>
      )}
      <div className="text-primary-400">Add To Cart</div>
    </div>
  );
};
