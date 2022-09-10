import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const NavBar = () => {
  const items = useSelector((state) => state.cart);
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
      <div className="right">cart-items: {items.length}</div>
    </header>
  );
};

export default NavBar;
