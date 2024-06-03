"use client"
import { ProductInterface } from '@/interfaces/ProductInterface';
import { ProductGetId } from '@/services/productos/ProductGetId';
import { Box, Grid, Typography } from '@mui/material';
import { useEffect, useState } from 'react';

interface Props {
  params : { id : string},
}

const ProductId = ( {params} : Props ) => {


    const [product, setProduct] = useState<ProductInterface | null>(null);

    useEffect(() => {
      const fetchData = async () => {
        const idNumber = Number(params.id)
        const response = await ProductGetId(idNumber);
        setProduct(response);
      };
  
      fetchData();
    }, []);

  return (
    <Box sx={{  display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
    <Grid container direction="column" justifyContent="center" alignItems="center" spacing={2}>
      <Grid item>
        <Typography variant="h4">Detalle del Producto con el ID : { product?.id }</Typography>
      </Grid>
      <Grid item style={{ fontSize : '22px'}}>
        <p>N°: {product?.id}</p>
        <p>Nombre: {product?.name}</p>
        <p>Descripción: {product?.description}</p>
        <p>Precio: {product?.price}</p>
      </Grid>
    </Grid>
  </Box>
   
    
    
  );
};

export default ProductId;