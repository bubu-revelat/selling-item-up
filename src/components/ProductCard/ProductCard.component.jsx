// ProductCard.jsx (No changes needed, the CSS handles the sizing)
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
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import './ProductCard.styles.css'; // Make sure your CSS file is correctly imported

const ProductCard = ({ product }) => {
  const [isPopupOpen, setIsPopupOpen] = useState(false);

  const cardImage = product.imageSrcs && product.imageSrcs.length > 0 ? product.imageSrcs[0] : null;

  const handleImageClick = () => {
    if (product.imageSrcs && product.imageSrcs.length > 0) {
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
      {cardImage ? (
        <CardMedia
          component="img"
          image={cardImage}
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
        <Box sx={{ flexGrow: 1 }} />
        <Box
          sx={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'flex-end',
            mt: 2
          }}
        >
          <Box sx={{ display: 'flex', flexDirection: 'column' }}>
            {/* Old price (if exists) */}
            {product.beforeprice && product.beforeprice > product.price && (
              <Typography
                variant="body2"
                sx={{
                  textDecoration: 'line-through',
                  color: 'text.secondary'
                }}
              >
                ${product.beforeprice}
              </Typography>
            )}

            {/* Current price */}
            {product.price !== 0 && (
              <Typography variant="h6" color="primary">
                ${product.price}
              </Typography>
            )}
          </Box>

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
              right: 30,
              top: 10, // push it lower so it doesn’t overlap
              color: (theme) => theme.palette.grey[500],
              zIndex: 2
            }}
          >
            <CloseIcon />
          </IconButton>
          {product.imageSrcs && product.imageSrcs.length > 0 && (
            <Carousel showThumbs={true} infiniteLoop={true} useKeyboardArrows={true}>
              {product.imageSrcs.map((imageSrc, index) => (
                <div key={index}>
                  {/* The styling for this img is now controlled by ProductCard.styles.css */}
                  <img src={imageSrc} alt={`${product.name} - ${index + 1}`} />
                </div>
              ))}
            </Carousel>
          )}
        </DialogContent>
      </Dialog>
    </Card>
  );
};

export default ProductCard;