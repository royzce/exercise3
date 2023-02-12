import {
  Button,
  Card,
  CardActions,
  CardContent,
  CardHeader,
  Grid,
  TextField,
} from "@mui/material";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const ProductForm = ({ onSubmit, editValue }) => {
  const [form, setForm] = useState(
    editValue || {
      title: "",
      price: "",
    }
  );
  const navigate = useNavigate();
  const handleChange = ({ currentTarget: input }) => {
    setForm({
      ...form,
      [input.name]: input.value,
    });
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    onSubmit(form);
    navigate("/");
  };
  return (
    <Grid
      container
      component="form"
      justifyContent="center"
      onSubmit={handleSubmit}
    >
      <Grid item xs={6}>
        <Card>
          <CardHeader title={`${editValue ? "Edit" : "Add"} Product`} />
          <CardContent>
            <Grid container spacing={2}>
              <Grid item xs={12}>
                <TextField
                  name="title"
                  onChange={handleChange}
                  value={form.title}
                  label="Product Name"
                  variant="standard"
                  fullWidth
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  name="price"
                  onChange={handleChange}
                  value={form.price}
                  label="Product Price"
                  variant="standard"
                  fullWidth
                />
              </Grid>
            </Grid>
          </CardContent>
          <CardActions>
            <Button type="submit" fullWidth>
              Submit
            </Button>
          </CardActions>
        </Card>
      </Grid>
    </Grid>
  );
};

export default ProductForm;
