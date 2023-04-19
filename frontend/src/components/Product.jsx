import React from "react";
import { useDispatch } from "react-redux";
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { addToCart } from "../features/cart/cartSlice";
import CardMedia from '@mui/material/CardMedia';

const Product = ({ product }) => {
  const dispatch = useDispatch();

  const handleAddToCart = () => {
    dispatch(addToCart(product));
  };

  return (

    <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        sx={{ height: 140 }}
        image=""
        title
      />
      <CardContent>
        <Typography gutterBottom variant="" component="div">
        {product.name}
        </Typography>
        <Typography variant="body2" color="text.secondary">
        ₱{product.price} 
        </Typography>
      </CardContent>
      <CardActions>
      <Button variant="contained" onClick={handleAddToCart}>Add to cart</Button>
      </CardActions>
    </Card>
    
  );
};

export default Product;
