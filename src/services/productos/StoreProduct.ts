import { Config } from "@/config/Config";
import { ProductoNuevo } from "@/interfaces/ProductInterface";

export const StoreProduct = async ( newProduct : ProductoNuevo) => {
    try {
        const requestBody = {
            name : newProduct.name,
            description : newProduct.description,
            price : newProduct.price
        }

        const token = localStorage.getItem('token');
        console.log(token);
        const options = {
            method: 'POST',
            headers: {
                'Authorization': `Bearer ${token}`, 
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(requestBody)
        }
        const response = await fetch(`${Config.URL_PRACTICA}/products`, options);
        const data = await response.json();
        return data;

    } catch (error) {
        console.log(error);
    }
}