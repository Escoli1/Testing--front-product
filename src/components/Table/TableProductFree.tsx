"use client"
import React from 'react';
import RemoveRedEyeIcon from '@mui/icons-material/RemoveRedEye';
import { useEffect, useState } from "react";
import { ProductInterface } from "@/interfaces/ProductInterface";
import { ProductGetAll } from "@/services/productos/ProductGetAll";
import {
    IconButton,
    Paper,
    Table,
    TableBody,
    TableCell,
    TableContainer,
    TableHead,
    TableRow,
  } from "@mui/material";
import Link from 'next/link';

function TableProductFree() {

    const [products, setProducts] = useState<ProductInterface[]>([]);

    useEffect(() => {
      const fetchData = async () => {
        const response = await ProductGetAll();
        setProducts(response);
      };
  
      fetchData();
    }, []);

    return (
        <>
            <TableContainer component={Paper}>
                <Table sx={{ minWidth: 650 }} >
                <TableHead>
                    <TableRow>
                    <TableCell>N°</TableCell>
                    <TableCell>Nombre</TableCell>
                    <TableCell>Descripción</TableCell>
                    <TableCell>Precio</TableCell>
                    <TableCell>Fecha Creación</TableCell>
                    <TableCell>Action</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {products.map((product) => (
                    <TableRow key={product.id} >
                        <TableCell> {product.id} </TableCell>
                        <TableCell> {product.name} </TableCell>
                        <TableCell> {product.description} </TableCell>
                        <TableCell> {product.price} </TableCell>
                        <TableCell> {new Date(product.createdAt).toLocaleDateString()} </TableCell>
                        <TableCell>
                          <Link href={`/products/${product.id}`} >
                            <IconButton>
                                <RemoveRedEyeIcon fontSize='small' color='success' />
                            </IconButton>
                          </Link>
                        </TableCell>
                    </TableRow>
                    ))}
                </TableBody>
                </Table>
            </TableContainer>
        </>
  )
}

export default TableProductFree