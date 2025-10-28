import React from 'react';
import ProductList from './components/ProductList/ProductList.component';
import { CssBaseline, Container, AppBar, Toolbar, Typography, Box } from '@mui/material';

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

      {/* Fancy discount announcement */}
      <Box
        sx={{
          textAlign: 'center',
          mt: 2,
          mb: 3,
          fontWeight: 'bold',
          fontSize: '1.2rem',
          background: 'linear-gradient(90deg, #121111ff, #FFB6C1)',
          WebkitBackgroundClip: 'text',
          WebkitTextFillColor: 'transparent',
          animation: 'pulse 2s infinite',
          '@keyframes pulse': {
            '0%': { opacity: 1 },
            '50%': { opacity: 0.7 },
            '100%': { opacity: 1 },
          },
        }}
      >
        🎉 ¡Aprovechá! Todos los precios bajaron un 15% ✨
      </Box>

      <Container maxWidth="lg" sx={{ mt: 4, mb: 4 }}>
        <ProductList />
      </Container>
    </>
  );
}

export default App;
