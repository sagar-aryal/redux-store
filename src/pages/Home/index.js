import React from "react";

import Products from "../../components/Products";

const Home = () => {
  return (
    <main>
      <h2>Welcome to the Redux Toolkit Store</h2>
      <section>
        <h3>Products</h3>
        <Products />
      </section>
    </main>
  );
};

export default Home;
