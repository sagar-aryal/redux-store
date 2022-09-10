import React from "react";
import { HashRouter, Routes, Route } from "react-router-dom";
import { Provider } from "react-redux";
import { store } from "./redux/store";

import NavBar from "./components/NavBar";
import Cart from "./pages/Cart";
import Home from "./pages/Home";
import Footer from "./components/Footer";

const App = () => {
  return (
    <div>
      <Provider store={store}>
        <HashRouter>
          <NavBar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/cart" element={<Cart />} />
          </Routes>
          <Footer />
        </HashRouter>
      </Provider>
    </div>
  );
};

export default App;
