import React, {useState, useEffect} from 'react'
import axios from 'axios'
import { useDispatch } from 'react-redux';
import Product from './Product';
import {
  Box,
  Card,
  CardActions,
  CardContent,
  Collapse,
  Button,
  Typography,
  Rating,
  useTheme,
  useMediaQuery,
} from "@mui/material";

const Productlist = () => {

  const dispatch = useDispatch();

  const [productData, setProductData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const isNonMobile = useMediaQuery("(min-width: 300px)");
  
  useEffect(() => {
    const getAllProducts = async () => {
        try {
          dispatch({
            type: "SHOW_LOADING",
          });
          const {data} = await axios.get('/api/products/getproducts');
          setProductData(data);
          dispatch({
            type: "HIDE_LOADING",
          });
          console.log(data);

        } catch(error) {
          console.log(error);
        }
      };

      getAllProducts();
  }, [dispatch]);
  

  return (
    <>
<Box m="1.5rem 2.5rem">
      {productData || !isLoading ? (
        <Box
          mt="20px"
          display="grid"
          gridTemplateColumns="repeat(4, minmax(0, 1fr))"
          justifyContent="space-between"
          rowGap="20px"
          columnGap="1.33%"
          sx={{
            "& > div": { gridColumn: isNonMobile ? undefined : "span 4" },
          }}
        >
        {productData.map((product, index) => (
            <Product key={product.id} product={product}/>
        ))}
    </Box>
    ) : (
      <>Loading...</>
    )}
  </Box>
          
    
    </>
  )
}

export default Productlist