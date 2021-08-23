import heart from "../icons/heart.png";
import cart from "../icons/cart.png";
import user from "../icons/user.png";

import { Link } from "react-router-dom";

export const UserTab = () => {
  return (
    <div className="flex flex-row justify-evenly items-center">
      <div>
        <img src={user} alt="userProfile" className="w-7 h-7 mr-4" />
      </div>
      <Link to="/wishlist">
        <div>
          <img src={heart} alt="wishlist" className="w-7 h-7 mr-4" />
        </div>
      </Link>
      <Link to="/cart">
        <div>
          <img src={cart} alt="cart" className="w-7 h-7 mr-4" />
        </div>
      </Link>
    </div>
  );
};
