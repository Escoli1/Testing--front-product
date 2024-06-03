"use client"
import React, { ChangeEvent } from 'react';
import { useEffect, useState } from "react";
import { ProductInterface } from "@/interfaces/ProductInterface";
import { ProductGetAll } from "@/services/productos/ProductGetAll";
import { Box, Button, Modal, Paper, Table, TableBody,TableCell, TableContainer, TableHead, TableRow, TextField, Typography } from "@mui/material";
import { DeleteId } from '@/services/productos/DeleteId';
import { ProductoNuevo } from '@/interfaces/ProductInterface';
import { StoreProduct } from '@/services/productos/StoreProduct';
import { ProductGetId } from '@/services/productos/ProductGetId';

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    boxShadow: 24,
    p: 4,
  };

function TableProductA() {

    const [products, setProducts] = useState<ProductInterface[]>([]);
    const [open, setOpen] = useState(false);
    const [newProduct, setNewProduct] = useState<ProductoNuevo>({
        name: '',
        description: '',
        price: 0
    });

    //abrir modal
    const handleOpen = () => setOpen(true);
    //cerrar modal
    const handleClose = () => setOpen(false);

    //modificar estado de un elemento del formulario
    const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
        const { name, value } = event.target;
        setNewProduct((prevProduct) => ({
            ...prevProduct,
            [name]: name === 'price' ? parseFloat(value) : value,
        }));
    };
    //evento del formulario para el envio de la informacion
    const handleSubmit = async (event : React.FormEvent<HTMLFormElement>   ) => {
        event.preventDefault();
        const data = await StoreProduct(newProduct);
        const { idProductoNuevo } = data;
        if (idProductoNuevo != 0) {
            setProducts((ProductsAntiguos) => [...ProductsAntiguos, data]);
            setNewProduct({
                name: '',
                description: '',
                price: 0
            });
            handleClose();
        } else {
            alert('Error en el registro')
        }
    };

    const eliminarProducto = async (id : number) => {
        const data = await DeleteId(id);
        const { idProduct } = data;
        if (idProduct != 0) {
            setProducts(products.filter(product => product.id !== id));
        } else {
            alert('No se elimino');
        }
    }

    const editarProducto = async (id : number) => {
        const data = await ProductGetId(id);
        setNewProduct({
            name : data?.name,
            description : data?.description,
            price : data?.price
        })
        handleOpen();
    }

    useEffect(() => {
      const fetchData = async () => {
        const response = await ProductGetAll();
        setProducts(response);
      };
  
      fetchData();
    }, []);

    return (
        <>
            <div className='container' style={{ padding : '10px'}}>
                <Button variant='contained' color='primary' onClick={handleOpen} >Crear Producto</Button>
            </div>
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
                    {products && products.map((product) => (
                    <TableRow key={product.id} >
                        <TableCell> {product.id} </TableCell>
                        <TableCell> {product.name} </TableCell>
                        <TableCell> {product.description} </TableCell>
                        <TableCell> {product.price} </TableCell>
                        <TableCell> {new Date(product.createdAt).toLocaleDateString()} </TableCell>
                        <TableCell>
                            <Button variant="contained" color='success' onClick={ () => editarProducto(product.id) }>Editar</Button>
                            <Button variant="contained"  onClick={ () => eliminarProducto(product.id) } color='error'>Eliminar</Button>
                        </TableCell>
                    </TableRow>
                    ))}
                </TableBody>
                </Table>
            </TableContainer>
            
            <Modal open={open} onClose={handleClose}>
                <Box sx={style}>
                <Typography variant="h6" component="h2">
                    Crear Nuevo Producto
                </Typography>
                    <Box component="form" onSubmit={handleSubmit} sx={{ mt: 2 }}>
                        <TextField
                            fullWidth
                            label="Nombre"
                            name="name"
                            value={newProduct.name}
                            onChange={handleChange}
                            margin="normal"
                            required
                        />
                        <TextField
                            fullWidth
                            label="Descripción"
                            name="description"
                            value={newProduct.description}
                            onChange={handleChange}
                            margin="normal"
                            required
                        />
                        <TextField
                            fullWidth
                            label="Precio"
                            name="price"
                            type="number"
                            value={newProduct.price}
                            onChange={handleChange}
                            margin="normal"
                            required
                        />
                        <Button type='submit' variant='contained' color='primary'  sx={{ mt: 2 }}>
                            Registrar Producto
                        </Button>
                        <Button variant='contained' color='error' onClick={handleClose} sx={{ mt: 2, ml : 2 }}>
                            Cancelar
                        </Button>
                    </Box>
                </Box>
            </Modal>
        </>
  )
}

export default TableProductA