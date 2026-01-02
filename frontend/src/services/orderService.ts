import apiClient from "@/api/axios";

export interface OrderRequest {
  skuCode: string;
  price: number;
  quantity: number;
  userDetails: {
    email: string;
    firstName: string;
    lastName: string;
  };
}

export const placeOrder = async (order: OrderRequest): Promise<string> => {
  const response = await apiClient.post<string>("/api/order", order);
  return response.data;
};
