import { Button } from "@mui/material";
import React from "react";
import { useNavigate } from "react-router-dom";
import CartItems from "../components/CartItems";

const Cart = ({ cartItems, onRemove }) => {
  const navigate = useNavigate();
  if (cartItems.length > 0) {
    return <CartItems cartItems={cartItems} onRemove={onRemove}></CartItems>;
  } else {
    return (
      <Button
        onClick={() => navigate("/")}
        variant="contained"
        sx={{ marginLeft: "1rem" }}
      >
        Go Shopping
      </Button>
    );
  }
};

export default Cart;
