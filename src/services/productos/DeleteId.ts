import { Config } from "@/config/Config"

export const DeleteId = async (id : number) => {
    try {
        const token = localStorage.getItem('token');
        const options = {
            method: 'DELETE',
            headers: {
                'Authorization': `Bearer ${token}`, 
                'Content-Type': 'application/json'
            }
        }

        const response = await fetch(`${Config.URL_PRACTICA}/products/${id}`, options);
        const data = await response.json();
        return data;

    } catch (error) {
        
    }
}