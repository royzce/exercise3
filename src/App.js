import { useState } from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import "./App.css";
import Checkout from "./components/Checkout";
import Dashboard from "./components/Dashboard";
import NavBar from "./components/NavBar";
import { PRODUCTS_DATA as data } from "./data/products";

function App() {
  const [products, setProducts] = useState(
    data.map((product) => {
      return { ...product, qty: 0 };
    })
  );

  function handleIncrement(id) {
    setProducts(
      products.map((product) => {
        if (product.id === id) {
          return { ...product, qty: product.qty + 1 };
        }
        return product;
      })
    );
  }
  function handleDecrement(id) {
    setProducts(
      products.map((product) => {
        if (product.id === id && product.qty > 0) {
          return { ...product, qty: product.qty - 1 };
        }
        return product;
      })
    );
  }
  function handleRemoveCart(id) {
    setProducts(
      products.map((product) => {
        if (product.id === id && product.qty > 0) {
          return { ...product, qty: 0 };
        }
        return product;
      })
    );
  }

  function handleAddToCart(id) {
    setProducts(
      products.map((product) =>
        product.id === id ? { ...product, qty: 1 } : product
      )
    );
  }

  return (
    <>
      <NavBar products={products} />

      <Routes>
        <Route
          path="/dashboard"
          element={
            <Dashboard
              products={products}
              onIncrement={handleIncrement}
              onDecrement={handleDecrement}
              onAddToCart={handleAddToCart}
              onRemoveCart={handleRemoveCart}
            />
          }
        />
        <Route path="/cart-items" element={<Checkout products={products} />} />
        <Route path="/" element={<Navigate to="/dashboard" />} />
      </Routes>
    </>
  );
}

export default App;
