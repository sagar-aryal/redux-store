import React from "react";
import { Link } from "react-router-dom";

const NavBar = () => {
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
      <div className="right">cart-items: 0</div>
    </header>
  );
};

export default NavBar;
