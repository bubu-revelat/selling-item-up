import React from 'react';
import ProductList from './components/ProductList/ProductList.component';
import { CssBaseline, Container, AppBar, Toolbar, Typography } from '@mui/material';

function App() {
  return (
    <>
      <CssBaseline /> {/* Resets CSS for consistent styling */}
      <AppBar position="static">
        <Toolbar sx={{ backgroundColor: '#ED7698' }}>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1, color: 'white' }}>
            Lista de productos en venta
          </Typography>
        </Toolbar>
      </AppBar>
      <Container maxWidth="lg" sx={{ mt: 4, mb: 4 }}>
        <ProductList />
      </Container>
    </>
  );
}

export default App;