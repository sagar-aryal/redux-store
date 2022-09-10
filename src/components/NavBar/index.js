import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { total } from "../../redux/features/cartSlice";

const NavBar = () => {
  const { cartItems, quantity } = useSelector((state) => state.cart);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(total());
  }, [dispatch, cartItems]);

  return (
    <header>
      <div className="left">
        <div className="logo">
          <Link to="/">Redux-Store</Link>
        </div>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/cart">Cart</Link>
            </li>
          </ul>
        </nav>
      </div>
      <div className="right">
        <Link to="/cart">cart-items: {quantity}</Link>
      </div>
    </header>
  );
};

export default NavBar;
