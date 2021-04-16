import React from "react";
import Grid from "@material-ui/core";
import Product from '../Product';

const products = [
  { id: 1, name: "shoes", description: "running shoes", price: '$5' },
  { id: 2, name: "jumper", description: "jumper with logo", price: '$10' },
];

const Products = () => {
  <main>
    <Grid container justify="center" spacing={4}>
      {products.map((product) => (
        <Grid item key={product.id} xs={12} sm={6} m={4} l={3}>
          <Product products={product} />
        </Grid>
      ))}
    </Grid>
  </main>;
};

export default Products;
