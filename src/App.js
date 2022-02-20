import "./App.css";

import { useState } from "react";
import MainContext from "./context/MainContext";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Toolbar from "./comps/Toolbar";
import CreateProductPage from "./Pages/CreateProductPage";
import SingleProductPage from "./Pages/SingleProductPage";
import MainPage from "./Pages/MainPage";
import CartPage from "./Pages/CartPage";
import LoginPage from "./Pages/LoginPage";
import RegisterPage from "./Pages/RegisterPage";

function App() {
  const [allProducts, setProducts] = useState([]);
  const [getCart, setCart] = useState([]);
  const [getUser, setUser] = useState([]);

  return (
    <MainContext.Provider value={{ getCart, setCart, getUser, setUser }}>
      <BrowserRouter>
        <Toolbar getCart={getCart} getUser={getUser} />
        <Routes>
          <Route
            path="/"
            element={
              <MainPage allProducts={allProducts} setProducts={setProducts} />
            }
          />
          <Route path="/create" element={<CreateProductPage />} />
          <Route
            path="/product/:id"
            element={<SingleProductPage getCart={getCart} setCart={setCart} />}
          />
          <Route path="/cart" element={<CartPage />} />

          <Route
            path="/login"
            element={<LoginPage getUser={getUser} setUser={setUser} />}
          />
          <Route path="/register" element={<RegisterPage />} />
        </Routes>
      </BrowserRouter>
    </MainContext.Provider>
  );
}

export default App;
