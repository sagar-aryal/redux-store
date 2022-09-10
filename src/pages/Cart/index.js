import React from "react";
import { useDispatch, useSelector } from "react-redux";

import { remove } from "../../redux/features/cartSlice";

const Cart = () => {
  const products = useSelector((state) => state.cart);
  const dispatch = useDispatch();

  return (
    <div className="cartWrapper">
      {products.map((product) => (
        <div className="cartCard">
          <img src={product.image} alt={product.title} />
          <h5>{product.title}</h5>
          <h5>{product.price}</h5>
          <button className="btn" onClick={() => dispatch(remove(product.id))}>
            remove
          </button>
        </div>
      ))}
    </div>
  );
};

export default Cart;
