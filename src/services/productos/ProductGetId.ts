import { Config } from "@/config/Config";

export const ProductGetId = async (id : number) => {
    try {
      const response = await fetch(`${Config.URL_PRACTICA}/products/${id}`);
      const data = response.json();
      return data;
    } catch (error) {
      console.log(error);
    }
  }
  