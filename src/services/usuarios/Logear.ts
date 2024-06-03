import { Config } from "@/config/Config";

export const Logear = async (email : string, password : string) => {
    try {
        const requestBody = {
            email : email,
            password : password
        }

        const response = await fetch(`${Config.URL_PRACTICA}/auth/login`,  {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json' 
            },
            body: JSON.stringify(requestBody) 
        });

        const data = await response.json();
        return data;
    } catch (error) {
        console.log(error);
    }
}
