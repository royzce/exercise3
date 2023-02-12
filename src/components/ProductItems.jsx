import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import {
  Alert,
  ButtonGroup,
  CardHeader,
  Container,
  Grid,
  IconButton,
  Snackbar,
} from "@mui/material";
import AddShoppingCartSharpIcon from "@mui/icons-material/AddShoppingCartSharp";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
import DoneIcon from "@mui/icons-material/Done";
import CloseIcon from "@mui/icons-material/Close";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import React, { useState } from "react";
import { Link } from "react-router-dom";

const ProductItems = ({
  products,
  onAddtoCart,
  onIncrement,
  onDecrement,
  onConfirmAddToCart,
  onCancelAddToCart,
  onDeleteProduct,
}) => {
  const [snackbarState, setSnackbarState] = useState(false);
  const handleSnackbar = () => {
    setSnackbarState(true);
  };
  const handleCloseSnackbar = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }
    setSnackbarState(false);
  };

  const AddToCartButton = (id) => {
    return (
      <Button variant="contained" fullWidth onClick={() => onAddtoCart(id)}>
        <AddShoppingCartSharpIcon />
        Add to Cart
      </Button>
    );
  };

  const QtyButtons = (qty, id) => {
    return (
      <>
        <ButtonGroup size="small" fullWidth>
          <Button variant="contained" onClick={() => onDecrement(id)}>
            <RemoveIcon />
          </Button>
          <Button variant="text" sx={{ pointerEvents: "none", color: "black" }}>
            {qty}
          </Button>
          <Button variant="contained" onClick={() => onIncrement(id)}>
            <AddIcon />
          </Button>
        </ButtonGroup>
        <ButtonGroup size="small" sx={{}} fullWidth>
          <Button variant="text" onClick={() => onCancelAddToCart(id)}>
            <CloseIcon sx={{ color: "red" }} />
          </Button>
          <Button
            onClick={() => {
              onConfirmAddToCart(qty, id);
              handleSnackbar();
            }}
            variant="text"
          >
            <DoneIcon sx={{ color: "green" }} />
          </Button>
        </ButtonGroup>
      </>
    );
  };

  return (
    <Container sx={{ paddingBottom: "1rem" }}>
      <Snackbar
        anchorOrigin={{ vertical: "top", horizontal: "center" }}
        open={snackbarState}
        autoHideDuration={1000}
        onClose={handleCloseSnackbar}
      >
        <Alert severity="success" sx={{ width: "100%" }}>
          Added to cart successfully!!
        </Alert>
      </Snackbar>
      <Grid container spacing={1.5}>
        {products.map((product) => (
          <Grid key={product.id} xs={6} sm={4} md={3} xl={2} item>
            <Card
              sx={{ height: 500, display: "flex", flexDirection: "column" }}
            >
              <CardHeader
                action={
                  <>
                    <Link to={`/edit-product/${product.id}`}>
                      <IconButton>
                        <EditIcon />
                      </IconButton>
                    </Link>

                    <IconButton onClick={() => onDeleteProduct(product.id)}>
                      <DeleteIcon />
                    </IconButton>
                  </>
                }
              />
              <CardMedia
                component="img"
                alt="Product_IMG"
                height="200"
                sx={{ objectFit: "contain" }}
                image={product.image}
              />
              <CardContent>
                <Typography
                  variant="h5"
                  component="div"
                  sx={{
                    overflow: "hidden",
                    textOverflow: "ellipsis",
                    display: "-webkit-box",
                    WebkitLineClamp: "2",
                    WebkitBoxOrient: "vertical",
                    height: 70,
                  }}
                >
                  {product.title}
                </Typography>
                <Typography variant="body1" color="text.secondary">
                  {"₱ " + product.price}
                </Typography>
              </CardContent>

              <CardActions
                sx={{
                  marginTop: "auto",
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "center",
                }}
              >
                {product.qty > 0
                  ? QtyButtons(product.qty, product.id)
                  : AddToCartButton(product.id)}
              </CardActions>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default ProductItems;
