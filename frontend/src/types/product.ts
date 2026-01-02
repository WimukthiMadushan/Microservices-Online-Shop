export interface Product {
  id: number;
  name: string;
  description: string;
  skuCode: string;
  price: number;
}

export interface ProductRequest {
  name: string;
  description: string;
  skuCode: string;
  price: number;
}
