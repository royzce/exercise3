import { AppBar, Badge, Box, IconButton, Toolbar } from "@mui/material";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import React from "react";
import { Link } from "react-router-dom";
import HomeIcon from "@mui/icons-material/Home";
const NavBar = ({ products }) => {
  return (
    <>
      <Box sx={{ paddingBottom: "1rem" }}>
        <AppBar position="static">
          <Toolbar sx={{ justifyContent: "space-between" }}>
            <Link to="/">
              <IconButton sx={{ color: "black" }}>
                <HomeIcon />
              </IconButton>
            </Link>
            <Link to="/cart-items">
              <IconButton sx={{ paddingLeft: "auto" }}>
                <Badge
                  color="secondary"
                  badgeContent={
                    products.filter((product) => product.qty > 0).length
                  }
                >
                  <ShoppingCartIcon sx={{ color: "black" }} />
                </Badge>
              </IconButton>
            </Link>
          </Toolbar>
        </AppBar>
      </Box>
    </>
  );
};

export default NavBar;
