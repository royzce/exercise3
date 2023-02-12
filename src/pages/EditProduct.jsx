import React from "react";
import { useParams } from "react-router-dom";
import ProductForm from "../components/ProductForm";

const EditProduct = ({ onEditProduct, products }) => {
  const params = useParams();
  const { id, ...product } = products.find((prod) => prod.id === +params.id);
  return (
    <ProductForm
      onSubmit={(form) => onEditProduct(id, form)}
      editValue={product}
    />
  );
};

export default EditProduct;
