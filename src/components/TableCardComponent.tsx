import imageTest from "../icons/image1.jpg";

import { TableObjectInterface } from "../store/types";

export const TableCardComponent = ({
  productId,
  productName,
  image,
  addToCart,
  price,
  discount,
  changeQuantity,
  quantity,
  removeItem,
  stock,
}: TableObjectInterface) => {
  return (
    <tr className="border-b">
      <td className="px-2">
        <div
          onClick={() => {
            removeItem();
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
          <button
            className="text-primary sm:text-xs md:text-sm"
            onClick={() => {}}
          >
            View Product
          </button>
        </div>
      </td>

      {changeQuantity && quantity ? (
        <td className="px-2">
          <div className="flex flex-row border-2 px-4 py-1.5 rounded-3xl items-center ">
            <input
              type="number"
              className=" w-16 outline-none"
              value={quantity}
              onChange={() => {
                changeQuantity(productId, quantity);
              }}
            />
          </div>
        </td>
      ) : (
        ""
      )}

      {addToCart ? (
        <td className="px-2">
          <div className=" bg-primary-400 rounded-3xl py-1.5 px-4 w-36">
            <button
              className="text-white sm:text-xs md:text-sm text-sm"
              onClick={() => {
                addToCart(productId, 1);
              }}
            >
              ADD TO CART
            </button>
          </div>
        </td>
      ) : (
        ""
      )}
    </tr>
  );
};
