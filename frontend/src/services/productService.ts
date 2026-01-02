import apiClient from "@/api/axios";
import { Product } from "@/data/products";
import { ProductRequest } from "@/types/product";

interface BackendProduct {
  id: number;
  name: string;
  description: string;
  skuCode: string;
  price: number;
}

export const getProducts = async (): Promise<Product[]> => {
  const response = await apiClient.get<BackendProduct[]>("/api/product");
  return response.data.map((bp) => ({
    id: bp.id.toString(),
    name: bp.name,
    description: bp.description,
    price: bp.price,
    skuCode: bp.skuCode,
    // Default values for fields missing in backend
    image:
      "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=400&h=400&fit=crop",
    images: [
      "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=400&h=400&fit=crop",
    ],
    category: "Electronics",
    brand: "Generic",
    rating: 4.5,
    reviewCount: 10,
    inStock: true,
    specifications: {},
    featured: false,
  }));
};

export const createProduct = async (
  product: ProductRequest
): Promise<Product> => {
  const response = await apiClient.post<BackendProduct>(
    "/api/product",
    product
  );
  const bp = response.data;
  return {
    id: bp.id.toString(),
    name: bp.name,
    description: bp.description,
    price: bp.price,
    // Default values
    image:
      "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=400&h=400&fit=crop",
    images: [
      "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=400&h=400&fit=crop",
    ],
    category: "Electronics",
    brand: "Generic",
    rating: 0,
    reviewCount: 0,
    inStock: true,
    specifications: {},
    featured: false,
  };
};
