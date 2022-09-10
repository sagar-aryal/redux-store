import React from "react";
import { useDispatch } from "react-redux";

import { add } from "../../redux/features/cartSlice";

const ProductItems = ({ id, image, title, price }) => {
  const product = { id, image, title, price };
  const dispatch = useDispatch();

  return (
    <div className="card">
      <img src={image} alt={title} />
      <h4>{title}</h4>
      <h5>{price}</h5>
      <button className="btn" onClick={() => dispatch(add(product))}>
        Add to cart
      </button>
    </div>
  );
};

export default ProductItems;
