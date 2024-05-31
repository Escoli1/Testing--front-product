import { Config } from "@/config/Config";

export const ProductGetAll = async () => {
  try {
    const response = await fetch(`${Config.URL_PRACTICA}/products`);
    const data = response.json();
    console.log(data);
    return data;
  } catch (error) {
    console.log(error);
  }
}

