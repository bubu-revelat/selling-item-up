import React from 'react';
import { Grid, Box, Typography } from '@mui/material';
import { products } from '../../data';
import ProductCard from '../ProductCard/ProductCard.component';

const ProductList = () => {
  return (
    <Box sx={{ flexGrow: 1, p: 3 }}>
      <Typography variant="h4" component="h1" align="center" gutterBottom>
        Su pregunta no molesta
      </Typography>
      <Grid container spacing={3} justifyContent="center">
        {products.map((product) => (
          <Grid item xs={12} sm={6} md={4} key={product.id}>
            <ProductCard product={product} />
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default ProductList;