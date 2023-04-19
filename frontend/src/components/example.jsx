import React, {useState, useEffect} from 'react'
import axios from 'axios'
import { useDispatch } from 'react-redux';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Product from './Product';

const Productlist = () => {

  const dispatch = useDispatch();

  const [productData, setProductData] = useState([]);
  
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
     <Box sx={{ flexGrow: 1}}>
      <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
        {productData.map((product, index) => (
          <Grid item xs={2} sm={2} md={2} key={index}>
            <Product key={product.id} product={product}/>
          </Grid>
        ))}
      </Grid>
    </Box>
    </>
  )
}

export default Productlist