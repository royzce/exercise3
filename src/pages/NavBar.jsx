import React from "react";
import {
  AppBar,
  Badge,
  Box,
  Button,
  ButtonGroup,
  IconButton,
  Toolbar,
} from "@mui/material";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { Link, useNavigate } from "react-router-dom";
import HomeIcon from "@mui/icons-material/Home";
import AddIcon from "@mui/icons-material/Add";
const NavBar = ({ cartItems }) => {
  const navigate = useNavigate();
  return (
    <Box sx={{ paddingBottom: "1rem" }}>
      <AppBar position="static">
        <Toolbar sx={{ justifyContent: "space-between" }}>
          <ButtonGroup>
            <IconButton sx={{ color: "black" }} onClick={() => navigate("/")}>
              <HomeIcon />
            </IconButton>
            <Button
              sx={{ color: "white", bgcolor: "black" }}
              variant="contained"
              onClick={() => navigate("/add-product")}
            >
              <AddIcon />
              Add new product
            </Button>
          </ButtonGroup>

          <Link to="/cart-items">
            <IconButton sx={{ paddingLeft: "auto" }}>
              <Badge color="secondary" badgeContent={cartItems.length}>
                <ShoppingCartIcon sx={{ color: "black" }} />
              </Badge>
            </IconButton>
          </Link>
        </Toolbar>
      </AppBar>
    </Box>
  );
};

export default NavBar;
