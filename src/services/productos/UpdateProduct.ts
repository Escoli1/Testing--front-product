import { Config } from "@/config/Config";
import { ProductoActualizar } from "@/interfaces/ProductInterface";

export const UpdateProduct = async ( product : ProductoActualizar) => {
    try {
        const requestBody = {
            name : product.name,
            description : product.description,
            price : product.price
        }

        const token = localStorage.getItem('token');
        const options = {
            method: 'PATCH',
            headers: {
                'Authorization': `Bearer ${token}`, 
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(requestBody)
        }
        const response = await fetch(`${Config.URL_PRACTICA}/products/${product.id}`, options);
        const data = await response.json();
        return data;

    } catch (error) {
        console.log(error);
    }
}