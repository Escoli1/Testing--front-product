"use client"
import { ProductInterface } from '@/interfaces/ProductInterface';
import { ProductGetId } from '@/services/productos/ProductGetId';
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
    <div>
      <h1>Product Details</h1>
      <p>N°: {product?.id}</p>
      <p>Nombre: {product?.name}</p>
      <p>Descripción: {product?.description}</p>
      <p>Precio: {product?.price}</p>
    </div>
  );
};

export default ProductId;