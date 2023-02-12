import React from "react";
import ProductForm from "../components/ProductForm";

const AddProduct = ({ onSubmit }) => {
  return <ProductForm onSubmit={onSubmit} />;
};

export default AddProduct;
