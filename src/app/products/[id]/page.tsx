"use client"
import { ProductInterface } from '@/interfaces/ProductInterface';
import { ProductGetId } from '@/services/productos/ProductGetId';
import { Box, Button, Grid, Typography } from '@mui/material';
import { useEffect, useState } from 'react';
import Link from 'next/link';

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
    <Box sx={{  display: 'flex', justifyContent: 'center', alignItems: 'center', marginTop: 10 }}>
    <Grid container direction="column" justifyContent="center" alignItems="center" spacing={2}>
      <Grid item>
        <Typography variant="h4">Detalle del Producto con el ID : { product?.id }</Typography>
      </Grid>
      <Grid item style={{ fontSize : '22px'}}>
        <p><strong>N°:</strong> {product?.id}</p>
        <p><strong>Nombre:</strong> {product?.name}</p>
        <p><strong>Descripción:</strong> {product?.description}</p>
        <p><strong>Precio:</strong> {product?.price}</p>
      </Grid>
      <Grid direction="column"  justifyContent="center" alignItems="center" >
        <Link href='/products'>
            <Button data-testidbutton='btn-volver-lista-productos' color='primary' variant='contained'>Volver a Productos</Button>
          </Link>
      </Grid>
    </Grid>
  </Box>
   
    
    
  );
};

export default ProductId;