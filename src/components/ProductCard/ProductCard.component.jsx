import React, { useState } from 'react';
import {
  Card,
  CardContent,
  CardMedia,
  Typography,
  Button,
  Box,
  Dialog,
  DialogContent,
  IconButton
} from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import './ProductCard.styles.css'; // We'll keep a CSS file for custom adjustments

const ProductCard = ({ product }) => {
  const [isPopupOpen, setIsPopupOpen] = useState(false);

  const handleImageClick = () => {
    if (product.imageSrc) {
      setIsPopupOpen(true);
    }
  };

  const handleClosePopup = () => {
    setIsPopupOpen(false);
  };

  const handleWhatsAppClick = () => {
    const phoneNumber = '5491150416481'; // Replace with your phone number
    const message = `Buenas Kari, estoy interesado en el producto: ${product.name}`;
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };

  // Helper to render description with line breaks
  const renderDescription = (description) => {
    if (!description || description === "nan") return null;
    return description.split('\n').map((item, key) => (
      <Typography key={key} variant="body2" color="text.secondary">
        {item}
      </Typography>
    ));
  };

  return (
    <Card className="product-card-mui">
      {product.imageSrc ? (
        <CardMedia
          component="img"
          image={product.imageSrc}
          alt={product.name}
          onClick={handleImageClick}
          sx={{ cursor: 'pointer', height: 200, objectFit: 'cover' }}
        />
      ) : (
        <Box
          className="product-image-placeholder"
          sx={{
            height: 200,
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            backgroundColor: '#f0f0f0',
            color: '#ccc',
            fontSize: '3rem'
          }}
        >
          No Image
        </Box>
      )}

      <CardContent sx={{ display: 'flex', flexDirection: 'column', flexGrow: 1 }}>
        <Typography gutterBottom variant="h5" component="div">
          {product.name}
        </Typography>
        {renderDescription(product.description)}
        <Box sx={{ flexGrow: 1 }} /> {/* Spacer to push footer to bottom */}
        <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mt: 2 }}>
          {product.price !== 0 && (
            <Typography variant="h6" color="primary">
              ${product.price}
            </Typography>
          )}
          <Button variant="contained" color="success" onClick={handleWhatsAppClick}>
            Lo Quiero!
          </Button>
        </Box>
      </CardContent>

      <Dialog open={isPopupOpen} onClose={handleClosePopup} maxWidth="md" fullWidth>
        <DialogContent sx={{ p: 0, position: 'relative' }}>
          <IconButton
            aria-label="close"
            onClick={handleClosePopup}
            sx={{
              position: 'absolute',
              right: 8,
              top: 8,
              color: (theme) => theme.palette.grey[500],
              zIndex: 1
            }}
          >
            <CloseIcon />
          </IconButton>
          <img src={product.imageSrc} alt={product.name} style={{ width: '100%', height: 'auto', display: 'block' }} />
        </DialogContent>
      </Dialog>
    </Card>
  );
};

export default ProductCard;