import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { ButtonGroup, Container, Grid } from "@mui/material";
import AddShoppingCartSharpIcon from "@mui/icons-material/AddShoppingCartSharp";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";

const Dashboard = ({ products, onIncrement, onDecrement, onAddToCart }) => {
  function displayQtyButton(id) {
    return products.find((product) => product.id === id && product.qty > 0);
  }
  return (
    <Container>
      <Grid container spacing={1.5}>
        {products.map((product) => (
          <Grid key={product.id} xs={6} sm={4} md={3} item>
            <Card
              sx={{ height: 400, display: "flex", flexDirection: "column" }}
            >
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
              <CardActions sx={{ marginTop: "auto", justifyContent: "center" }}>
                {!displayQtyButton(product.id) && (
                  <Button
                    variant="contained"
                    fullWidth
                    onClick={() => onAddToCart(product.id)}
                  >
                    <AddShoppingCartSharpIcon />
                    Add to Cart
                  </Button>
                )}
                {displayQtyButton(product.id) && (
                  <>
                    <ButtonGroup size="small" fullWidth>
                      <Button
                        variant="contained"
                        onClick={() => onDecrement(product.id)}
                      >
                        <RemoveIcon />
                      </Button>
                      <Button
                        variant="text"
                        sx={{ pointerEvents: "none", color: "black" }}
                      >
                        {product.qty}
                      </Button>
                      <Button
                        variant="contained"
                        onClick={() => onIncrement(product.id)}
                      >
                        <AddIcon />
                      </Button>
                    </ButtonGroup>
                  </>
                )}
              </CardActions>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default Dashboard;
