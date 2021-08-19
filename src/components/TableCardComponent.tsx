import { useDispatch } from "react-redux";
import imageTest from "../icons/image1.jpg";
import { removeWishListItemRequest } from "../store/actions/wishListActons";

import { WishListObjectInterface } from "../store/types";

export const TableCardComponent = ({
  productId,
  productName,
  image,
  price,
  discount,
  stock,
}: WishListObjectInterface) => {
  const dispatch = useDispatch();

  return (
    <tr className="border-b">
      <td className="px-2">
        <div
          onClick={() => {
            dispatch(removeWishListItemRequest(productId));
          }}
        >
          X
        </div>
      </td>
      <td className="px-2">
        <div className="flex flex-row items-center ">
          <div>
            <img src={imageTest} alt="productId" className="w-28 h-28" />
          </div>
          <div>{productName}</div>
        </div>
      </td>
      <td className="px-2">
        {discount > 0 ? (
          <div>
            <span>Rs. {price - (price * discount) / 100}</span>
            <span className="ml-2 line-through text-text">{price}</span>
          </div>
        ) : (
          <span>Rs. {price}</span>
        )}
      </td>
      <td className="px-2">
        {stock > 0 ? (
          <div className="text-primary">In Stock</div>
        ) : (
          <div className="text-red-500  ">Sold</div>
        )}
      </td>
      <td className="px-2">
        <div className=" border border-primary-400  rounded-3xl py-1.5 px-4 w-36">
          <button className="text-primary sm:text-xs md:text-sm">
            View Product
          </button>
        </div>
      </td>
      <td className="px-2">
        <div className=" bg-primary-400 rounded-3xl py-1.5 px-4 w-36">
          <button className="text-white sm:text-xs md:text-sm text-sm">
            ADD TO CART
          </button>
        </div>
      </td>
    </tr>
  );
};
