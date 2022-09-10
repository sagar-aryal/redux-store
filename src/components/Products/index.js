import React, { useState, useEffect } from "react";
import axios from "axios";
import ProductItems from "../ProductItems";

const Products = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await axios.get("https://fakestoreapi.com/products");
        const data = await response.data;
        setProducts(data);
      } catch (error) {
        console.log(error);
      }
    };
    fetchProducts();
  }, []);

  return (
    <div className="productsWrapper">
      {products.map((product) => (
        <ProductItems key={product.id} {...product} />
      ))}
    </div>
  );
};

export default Products;
