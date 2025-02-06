// Import Material UI components
import React from 'react';
import { 
  Card as MuiCard,  // Rename the imported Card to MuiCard
  CardContent, 
  CardMedia, 
  Typography, 
  Box, 
  Chip, 
  Rating, 
  Stack,
  Divider
} from '@mui/material';
import { LocalOffer, Inventory, ShoppingCart } from '@mui/icons-material';

// Rename your custom Card component to avoid conflicts
const ProductCard = ({ product }) => {
  const discountedPrice = product.price * (1 - product.discountPercentage / 100);

  return (
    <MuiCard sx={{ width: 345, height: '100%', display: 'flex', flexDirection: 'column' }}>
      <CardMedia
        component="img"
        height={200}
        image={product.thumbnail}
        alt={product.title}
        sx={{ objectFit: 'cover' }}
      />
      <CardContent sx={{ flexGrow: 1, display: 'flex', flexDirection: 'column' }}>
        <Typography gutterBottom variant="h6" component="div" noWrap>
          {product.title}
        </Typography>
        <Typography variant="body2" color="text.secondary" sx={{ mb: 2, overflow: 'hidden', textOverflow: 'ellipsis', display: '-webkit-box', WebkitLineClamp: 3, WebkitBoxOrient: 'vertical' }}>
          {product.description}
        </Typography>
        <Stack direction="row" spacing={1} alignItems="center" mb={1}>
          <Typography variant="h6" color="primary">
            ${discountedPrice.toFixed(2)}
          </Typography>
          {product.discountPercentage > 0 && (
            <Typography variant="body2" color="text.secondary" sx={{ textDecoration: 'line-through' }}>
              ${product.price.toFixed(2)}
            </Typography>
          )}
          {product.discountPercentage > 0 && (
            <Chip label={`${product.discountPercentage}% OFF`} color="error" size="small" />
          )}
        </Stack>
        <Box display="flex" alignItems="center" mb={1}>
          <Rating value={product.rating} precision={0.1} readOnly size="small" />
          <Typography variant="body2" color="text.secondary" ml={1}>
            ({product.rating})
          </Typography>
        </Box>
        <Stack direction="row" spacing={1} mb={1} sx={{ flexWrap: 'wrap' }}>
          {product.tags.map((tag, index) => (
            <Chip key={index} label={tag} size="small" sx={{ mb: 0.5 }} />
          ))}
        </Stack>
        <Box display="flex" alignItems="center" mb={1}>
          <LocalOffer fontSize="small" color="action" />
          <Typography variant="body2" color="text.secondary" ml={1} noWrap>
            {product.brand}
          </Typography>
        </Box>
        <Box display="flex" alignItems="center" mb={1}>
          <Inventory fontSize="small" color="action" />
          <Typography variant="body2" color="text.secondary" ml={1} noWrap>
            SKU: {product.sku}
          </Typography>
        </Box>
        <Box display="flex" alignItems="center">
          <ShoppingCart fontSize="small" color="action" />
          <Typography variant="body2" color={product.stock > 0 ? 'success.main' : 'error.main'} ml={1} noWrap>
            {product.availabilityStatus}
          </Typography>
        </Box>
      </CardContent>
      <Divider />
      <CardContent sx={{ flexGrow: 0 }}>
        <Typography variant="subtitle1" gutterBottom>
          Recent Reviews
        </Typography>
        {product.reviews.slice(0, 2).map((review, index) => (
          <Box key={index} mb={1}>
            <Rating value={review.rating} size="small" readOnly />
            <Typography variant="body2" sx={{ overflow: 'hidden', textOverflow: 'ellipsis', display: '-webkit-box', WebkitLineClamp: 2, WebkitBoxOrient: 'vertical' }}>
              {review.comment}
            </Typography>
            <Typography variant="caption" color="text.secondary">
              - {review.reviewerName}
            </Typography>
          </Box>
        ))}
      </CardContent>
    </MuiCard>
  );
};

export default ProductCard;
