import { IError, IProduct, IProducts } from "@/interfaces/products";
import { skip } from "node:test";

const API_URL = "https://dummyjson.com";

export const fetchCategories = async (): Promise<string[]> => {
  try {
    const response = await fetch(`${API_URL}/products/category-list`);
    const data: string[] = await response.json();
    return data;
  } catch (err) {
    console.log(err);
    return [];
  }
};

export const fetchProducts = async (
  category: string,
  limit: number = 6,
  skip: number = 0
): Promise<IProducts | { products: [] }> => {
  try {
    const response = await fetch(
      `${API_URL}/products${category}?limit=${limit}&spik=${skip}`
    );
    const data: IProducts = await response.json();
    return data;
  } catch (err) {
    console.log(err);
    return {
      products: [],
    };
  }
};
