import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import ProductItems from "../ProductItems";
import { fetchProducts } from "../../redux/features/productSlice";

const Products = () => {
  const { data, loading, error } = useSelector((state) => state.product);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);

  return (
    <div className="productsWrapper">
      {loading && <i>Loading...</i>}
      {!error &&
        data &&
        data.map((product) => <ProductItems key={product.id} {...product} />)}
    </div>
  );
};

export default Products;
