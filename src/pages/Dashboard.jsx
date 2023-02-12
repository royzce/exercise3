import React from "react";
import ProductItems from "../components/ProductItems";

const Dashboard = ({
  products,
  onAddtoCart,
  onIncrement,
  onDecrement,
  onConfirmAddToCart,
  onCancelAddToCart,
  onDeleteProduct,
}) => {
  return (
    <ProductItems
      products={products}
      onAddtoCart={onAddtoCart}
      onIncrement={onIncrement}
      onDecrement={onDecrement}
      onConfirmAddToCart={onConfirmAddToCart}
      onCancelAddToCart={onCancelAddToCart}
      onDeleteProduct={onDeleteProduct}
    />
  );
};

export default Dashboard;
