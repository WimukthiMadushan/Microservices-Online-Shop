export interface User {
  id: string;
  name: string;
  email: string;
  avatar: string;
  phone: string;
  addresses: Address[];
  orders: Order[];
}

export interface Address {
  id: string;
  label: string;
  street: string;
  city: string;
  state: string;
  zipCode: string;
  country: string;
  isDefault: boolean;
}

export interface OrderItem {
  productId: string;
  name: string;
  price: number;
  quantity: number;
  image: string;
}

export interface Order {
  id: string;
  date: string;
  status: "pending" | "processing" | "shipped" | "delivered" | "cancelled";
  items: OrderItem[];
  subtotal: number;
  tax: number;
  shipping: number;
  total: number;
  shippingAddress: Address;
  trackingNumber?: string;
}

export const mockUser: User = {
  id: "user-1",
  name: "John Doe",
  email: "john.doe@example.com",
  avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop",
  phone: "+1 (555) 123-4567",
  addresses: [
    {
      id: "addr-1",
      label: "Home",
      street: "123 Main Street, Apt 4B",
      city: "San Francisco",
      state: "CA",
      zipCode: "94102",
      country: "United States",
      isDefault: true,
    },
    {
      id: "addr-2",
      label: "Work",
      street: "456 Market Street, Suite 200",
      city: "San Francisco",
      state: "CA",
      zipCode: "94103",
      country: "United States",
      isDefault: false,
    },
  ],
  orders: [
    {
      id: "ORD-2024-001",
      date: "2024-01-15",
      status: "delivered",
      items: [
        {
          productId: "1",
          name: "iPhone 15 Pro Max",
          price: 1199,
          quantity: 1,
          image: "https://images.unsplash.com/photo-1695048133142-1a20484d2569?w=100&h=100&fit=crop",
        },
        {
          productId: "9",
          name: "AirPods Pro 2",
          price: 249,
          quantity: 1,
          image: "https://images.unsplash.com/photo-1588423771073-b8903fbb85b5?w=100&h=100&fit=crop",
        },
      ],
      subtotal: 1448,
      tax: 115.84,
      shipping: 0,
      total: 1563.84,
      shippingAddress: {
        id: "addr-1",
        label: "Home",
        street: "123 Main Street, Apt 4B",
        city: "San Francisco",
        state: "CA",
        zipCode: "94102",
        country: "United States",
        isDefault: true,
      },
      trackingNumber: "1Z999AA10123456784",
    },
    {
      id: "ORD-2024-002",
      date: "2024-01-20",
      status: "shipped",
      items: [
        {
          productId: "4",
          name: "Sony WH-1000XM5",
          price: 349,
          quantity: 1,
          image: "https://images.unsplash.com/photo-1618366712010-f4ae9c647dcb?w=100&h=100&fit=crop",
        },
      ],
      subtotal: 349,
      tax: 27.92,
      shipping: 9.99,
      total: 386.91,
      shippingAddress: {
        id: "addr-2",
        label: "Work",
        street: "456 Market Street, Suite 200",
        city: "San Francisco",
        state: "CA",
        zipCode: "94103",
        country: "United States",
        isDefault: false,
      },
      trackingNumber: "1Z999AA10123456785",
    },
    {
      id: "ORD-2024-003",
      date: "2024-01-25",
      status: "processing",
      items: [
        {
          productId: "6",
          name: "PlayStation 5",
          price: 499,
          quantity: 1,
          image: "https://images.unsplash.com/photo-1606813907291-d86efa9b94db?w=100&h=100&fit=crop",
        },
      ],
      subtotal: 499,
      tax: 39.92,
      shipping: 0,
      total: 538.92,
      shippingAddress: {
        id: "addr-1",
        label: "Home",
        street: "123 Main Street, Apt 4B",
        city: "San Francisco",
        state: "CA",
        zipCode: "94102",
        country: "United States",
        isDefault: true,
      },
    },
  ],
};
