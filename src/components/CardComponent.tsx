import { useDispatch } from "react-redux";

import { CardComponentInterface } from "./types";
import imagetest from "../icons/image1.jpg";
import { addToWishListRequest } from "../store/actions/wishListActons";
import history from "../store/history";
import { addToCartAction } from "../store/actions/cartAction";

export const CardComponent = ({
  productId,
  image,
  brandName,
  productName,
  discount,
  price,
}: CardComponentInterface) => {
  const dispatch = useDispatch();
  return (
    <div className="flex flex-col border items-center border-text-300 w-full rounded justify-between">
      <img src={imagetest} alt={productId} />
      <div>{productName}</div>
      <div className="text-text-700">by {brandName}</div>
      {discount > 0 ? (
        <div>
          <span>Rs. {price - (price * discount) / 100}</span>
          <span className="ml-2 line-through text-text">{price}</span>
        </div>
      ) : (
        <span>Rs. {price}</span>
      )}
      <div className="flex flex-row my-2">
        <div className="text-primary-400 border-primary-400 mr-2  px-2 border rounded-3xl">
          <button
            onClick={() => {
              if (localStorage.getItem("uid"))
                dispatch(addToWishListRequest(productId));
              else {
                history.push("/SignIn");
              }
            }}
          >
            Add to WishList
          </button>
        </div>
        <div className="text-primary-400 border-primary-400  px-2 border rounded-3xl">
          <button
            onClick={() => {
              dispatch(addToCartAction(productId, 1));
            }}
          >
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
};
