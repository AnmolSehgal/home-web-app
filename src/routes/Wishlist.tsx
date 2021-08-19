import { TableCardComponent } from "../components/TableCardComponent";
import { useDispatch, useSelector } from "react-redux";
import { StateInterface } from "../store/types";
import { useEffect } from "react";
import {
  fetchWishListRequest,
  removeWishListItemRequest,
} from "../store/actions/wishListActons";

const WishList = () => {
  const { loadSpinner, list } = useSelector((state: StateInterface) => {
    return state.wishlist;
  });

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchWishListRequest());
  }, [dispatch]);

  return loadSpinner ? (
    <div>Loading</div>
  ) : list.length > 0 ? (
    <div className="flex flex-col items-center">
      <div className="text-2xl font-bold my-8">My Wishlist</div>
      <table className="table w-10/12 text-center mx-8 border">
        <tr className="border-b">
          <th></th>
          <th className="">Product Details</th>
          <th>Price</th>
          <th>Available</th>
          <th></th>
          <th></th>
        </tr>
        {list.map((value) => {
          return (
            <TableCardComponent
              {...value}
              removeItem={() => {
                dispatch(removeWishListItemRequest(value.productId));
              }}
              addToCart={() => {}}
            />
          );
        })}
      </table>
    </div>
  ) : (
    <div>No Item in your WishList</div>
  );
};
export default WishList;
