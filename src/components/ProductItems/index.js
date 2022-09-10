import React from "react";

const ProductItems = ({ image, title, price }) => {
  return (
    <div className="card">
      <img src={image} alt={title} />
      <h4>{title}</h4>
      <h5>{price}</h5>
      <button className="btn">Add to cart</button>
    </div>
  );
};

export default ProductItems;
