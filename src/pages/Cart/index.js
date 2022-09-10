import React from "react";
import { useDispatch, useSelector } from "react-redux";

import {
  decrementQuantity,
  incrementQuantity,
  remove,
  clear,
} from "../../redux/features/cartSlice";

const Cart = () => {
  const { cartItems, total } = useSelector((state) => state.cart);
  const dispatch = useDispatch();

  return (
    <div className="cartWrapper">
      <div>
        {cartItems.map((product) => (
          <div className="cartCard" key={product.id}>
            <img src={product.image} alt={product.title} />
            <h5>{product.title}</h5>
            <h5>{product.price}</h5>
            <div className="amount">
              <button
                className="cart-btn"
                onClick={() => dispatch(incrementQuantity(product.id))}
              >
                +
              </button>
              <span>{product.quantity}</span>
              <button
                className="cart-btn"
                onClick={() => dispatch(decrementQuantity(product.id))}
              >
                -
              </button>
            </div>
            <button
              className="btn"
              onClick={() => dispatch(remove(product.id))}
            >
              remove
            </button>
          </div>
        ))}
      </div>
      {cartItems.length >= 1 ? (
        <>
          <h3 className="total">Total: ${parseFloat(total).toFixed(2)}</h3>
          <button className="btn" onClick={() => dispatch(clear())}>
            clear all
          </button>
        </>
      ) : (
        <h3>Cart is empty</h3>
      )}
    </div>
  );
};

export default Cart;
