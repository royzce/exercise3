import { useState } from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import "./App.css";
import { PRODUCTS_DATA as data } from "./data/products";
import AddProduct from "./pages/AddProduct";
import Cart from "./pages/Cart";
import Dashboard from "./pages/Dashboard";
import EditProduct from "./pages/EditProduct";
import NavBar from "./pages/NavBar";

function App() {
  const [products, setProducts] = useState(
    data.map((product) => {
      return { ...product, qty: 0 };
    })
  );

  const [cartItems, setCartItems] = useState([]);

  const handleIncrement = (id) => {
    setProducts(
      products.map((product) => {
        if (product.id === id) {
          return { ...product, qty: product.qty + 1 };
        }
        return product;
      })
    );
  };
  const handleDecrement = (id) => {
    setProducts(
      products.map((product) => {
        if (product.id === id && product.qty > 0) {
          return { ...product, qty: product.qty - 1 };
        }
        return product;
      })
    );
  };

  const handleAddToCart = (id) => {
    setProducts(
      products.map((product) =>
        product.id === id ? { ...product, qty: 1 } : product
      )
    );
  };

  const handleConfirmAddToCart = (qty, id) => {
    const isItemAlreadyInCart = cartItems.find(
      (cartItem) => cartItem.id === id
    );
    if (isItemAlreadyInCart) {
      setCartItems(
        cartItems.map((cartItem) => {
          if (cartItem.id === id) {
            return { ...cartItem, qty: cartItem.qty + qty };
          } else {
            return cartItem;
          }
        })
      );
    } else {
      setCartItems([
        ...cartItems,
        { ...products.find((product) => product.id === id), qty: qty },
      ]);
    }

    setProducts(
      products.map((product) => {
        if (product.id === id) {
          return { ...product, qty: 0 };
        } else {
          return product;
        }
      })
    );
  };

  const handleCancelAddToCart = (id) => {
    setProducts(
      products.map((product) => {
        if (product.id === id) {
          return { ...product, qty: 0 };
        } else {
          return product;
        }
      })
    );
  };

  const handleRemoveItem = (id) => {
    setCartItems(cartItems.filter((cartItem) => cartItem.id !== id));
  };

  const handleAddProduct = (product) => {
    setProducts([
      ...products,
      {
        ...product,
        qty: 0,
        image:
          "https://keydifferences.com/wp-content/uploads/2015/08/brand.jpg",
        id: products.length * 100 + 1,
      },
    ]);
  };

  const handleEditProduct = (id, product) => {
    setProducts(
      products.map((prod) => {
        if (prod.id === id) {
          return { ...prod, ...product };
        } else {
          return prod;
        }
      })
    );
  };

  const handleDeleteProduct = (id) => {
    setProducts(products.filter((product) => product.id !== id));
  };

  return (
    <>
      <NavBar cartItems={cartItems} />
      <Routes>
        <Route
          path="/edit-product/:id"
          element={
            <EditProduct
              onEditProduct={handleEditProduct}
              products={products}
            />
          }
        />
        <Route
          path="/dashboard"
          element={
            <Dashboard
              products={products}
              onAddtoCart={handleAddToCart}
              onIncrement={handleIncrement}
              onDecrement={handleDecrement}
              onConfirmAddToCart={handleConfirmAddToCart}
              onCancelAddToCart={handleCancelAddToCart}
              onDeleteProduct={handleDeleteProduct}
            />
          }
        />
        <Route
          path="/cart-items"
          element={<Cart cartItems={cartItems} onRemove={handleRemoveItem} />}
        />
        <Route
          path="/add-product"
          element={<AddProduct onSubmit={handleAddProduct} />}
        />

        <Route path="/" element={<Navigate to="/dashboard" />} />
      </Routes>
    </>
  );
}

export default App;
