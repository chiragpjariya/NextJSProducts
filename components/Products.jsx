'use client'
import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { useQuery } from '@tanstack/react-query'
import { useDispatch } from 'react-redux';
import { getProducts } from '../utils/Axios.js';
import { setProducts} from '../redux/ProductSliece'
import Error from './Error';
import Grid from '@mui/material/Grid2';
import { Box, Container } from '@mui/material';
import ProductCard from './ProductCard';  // Assuming you have a Card component
// import Loadings from './Loadings.jsx';

const Products = () => {
  
  const [product, setProduct] = useState([]);


  const dispatch = useDispatch()
  const storeData = useSelector((state) => state.products.products)



  const { data , isLoading, error, isError } = useQuery({
    queryKey: ['products'],
    queryFn: async () => await getProducts()
  })

  useEffect(() => {
    if (!isLoading && !isError) {
      dispatch(setProducts(data))

    }

  }, [isLoading, isError, dispatch, error?.message, data, storeData])



  

  useEffect(() => {
    setProduct(storeData);
  }, [storeData]);


  return (


    <Container  maxWidth="xl" sx={{backgroundColor:'#808080'}} >
    <Box>
      <Grid container spacing={3}>
        {product?.map((product) => (
          <Grid  xs={12} sm={6} md={3} key={product.id} sx={{marginTop:10}} item>
            <ProductCard product={product} />
          </Grid>
        ))}
      </Grid>
    </Box>
    </Container>
  );
};

export default Products;
