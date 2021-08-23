import { TableCardComponent } from "../components/TableCardComponent";
import { useDispatch, useSelector } from "react-redux";
import { StateInterface } from "../store/types";

import { useEffect } from "react";
import {
  addToCartAction,
  fetchCartRequest,
  removeFromCartRequest,
} from "../store/actions/cartAction";

const Cart = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchCartRequest());
  }, [dispatch]);

  const { loadSpinner, itemList } = useSelector(
    (state: StateInterface) => state.cart
  );
  return loadSpinner ? (
    <div>Loading</div>
  ) : itemList.length > 0 ? (
    <div className="flex flex-col items-center">
      <div className="text-2xl font-bold my-8">My Cart</div>
      <table className="table w-10/12 text-center mx-8 border">
        <tr className="border-b">
          <th></th>
          <th className="">Product Details</th>
          <th>Price</th>
          <th>Available</th>
          <th>Quantity</th>
          <th></th>
          <th></th>
        </tr>
        {itemList.map((value, index) => {
          return (
            <TableCardComponent
              {...value}
              quantity={value.quantity}
              changeQuantity={(productId, quantity) => {
                dispatch(addToCartAction(productId, quantity));
              }}
              removeItem={() => {
                dispatch(removeFromCartRequest(value.productId));
              }}
            />
          );
        })}
      </table>
    </div>
  ) : (
    <div>No Item in your WishList</div>
  );
};

export default Cart;
