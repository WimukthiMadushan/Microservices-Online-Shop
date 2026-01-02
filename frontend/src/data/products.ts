export interface Product {
  id: string;
  name: string;
  description: string;
  skuCode?: string;
  price: number;
  originalPrice?: number;
  image: string;
  images: string[];
  category: string;
  brand: string;
  rating: number;
  reviewCount: number;
  inStock: boolean;
  specifications: Record<string, string>;
  featured?: boolean;
}

export interface Category {
  id: string;
  name: string;
  icon: string;
  image: string;
  productCount: number;
}

export const categories: Category[] = [
  {
    id: "phones",
    name: "Smartphones",
    icon: "Smartphone",
    image:
      "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?w=400&h=300&fit=crop",
    productCount: 24,
  },
  {
    id: "laptops",
    name: "Laptops",
    icon: "Laptop",
    image:
      "https://images.unsplash.com/photo-1496181133206-80ce9b88a853?w=400&h=300&fit=crop",
    productCount: 18,
  },
  {
    id: "audio",
    name: "Audio",
    icon: "Headphones",
    image:
      "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=400&h=300&fit=crop",
    productCount: 32,
  },
  {
    id: "accessories",
    name: "Accessories",
    icon: "Watch",
    image:
      "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=400&h=300&fit=crop",
    productCount: 45,
  },
  {
    id: "gaming",
    name: "Gaming",
    icon: "Gamepad2",
    image:
      "https://images.unsplash.com/photo-1612287230202-1ff1d85d1bdf?w=400&h=300&fit=crop",
    productCount: 15,
  },
  {
    id: "cameras",
    name: "Cameras",
    icon: "Camera",
    image:
      "https://images.unsplash.com/photo-1516035069371-29a1b244cc32?w=400&h=300&fit=crop",
    productCount: 12,
  },
];

export const products: Product[] = [
  {
    id: "1",
    name: "iPhone 15 Pro Max",
    description:
      "The most powerful iPhone ever with A17 Pro chip, titanium design, and advanced camera system.",
    price: 1199,
    originalPrice: 1299,
    image:
      "https://images.unsplash.com/photo-1695048133142-1a20484d2569?w=400&h=400&fit=crop",
    images: [
      "https://images.unsplash.com/photo-1695048133142-1a20484d2569?w=800&h=800&fit=crop",
      "https://images.unsplash.com/photo-1592750475338-74b7b21085ab?w=800&h=800&fit=crop",
    ],
    category: "phones",
    brand: "Apple",
    rating: 4.9,
    reviewCount: 2847,
    inStock: true,
    featured: true,
    specifications: {
      Display: "6.7-inch Super Retina XDR",
      Chip: "A17 Pro",
      Storage: "256GB",
      Camera: "48MP Main + 12MP Ultra Wide",
      Battery: "Up to 29 hours video playback",
    },
  },
  {
    id: "2",
    name: "Samsung Galaxy S24 Ultra",
    description:
      "Ultimate Galaxy experience with Galaxy AI, 200MP camera, and S Pen included.",
    price: 1299,
    image:
      "https://images.unsplash.com/photo-1610945265064-0e34e5519bbf?w=400&h=400&fit=crop",
    images: [
      "https://images.unsplash.com/photo-1610945265064-0e34e5519bbf?w=800&h=800&fit=crop",
    ],
    category: "phones",
    brand: "Samsung",
    rating: 4.8,
    reviewCount: 1923,
    inStock: true,
    featured: true,
    specifications: {
      Display: "6.8-inch Dynamic AMOLED 2X",
      Processor: "Snapdragon 8 Gen 3",
      Storage: "512GB",
      Camera: "200MP Main",
      Battery: "5000mAh",
    },
  },
  {
    id: "3",
    name: 'MacBook Pro 16"',
    description:
      "Supercharged by M3 Pro or M3 Max chip. Built for pros who need a beast.",
    price: 2499,
    originalPrice: 2699,
    image:
      "https://images.unsplash.com/photo-1517336714731-489689fd1ca8?w=400&h=400&fit=crop",
    images: [
      "https://images.unsplash.com/photo-1517336714731-489689fd1ca8?w=800&h=800&fit=crop",
    ],
    category: "laptops",
    brand: "Apple",
    rating: 4.9,
    reviewCount: 1456,
    inStock: true,
    featured: true,
    specifications: {
      Display: "16.2-inch Liquid Retina XDR",
      Chip: "Apple M3 Pro",
      Memory: "18GB Unified Memory",
      Storage: "512GB SSD",
      Battery: "Up to 22 hours",
    },
  },
  {
    id: "4",
    name: "Sony WH-1000XM5",
    description:
      "Industry-leading noise canceling with Auto NC Optimizer and crystal-clear hands-free calling.",
    price: 349,
    originalPrice: 399,
    image:
      "https://images.unsplash.com/photo-1618366712010-f4ae9c647dcb?w=400&h=400&fit=crop",
    images: [
      "https://images.unsplash.com/photo-1618366712010-f4ae9c647dcb?w=800&h=800&fit=crop",
    ],
    category: "audio",
    brand: "Sony",
    rating: 4.7,
    reviewCount: 3421,
    inStock: true,
    featured: true,
    specifications: {
      Driver: "30mm",
      "Noise Canceling": "Industry-leading ANC",
      "Battery Life": "30 hours",
      Connectivity: "Bluetooth 5.2, 3.5mm",
      Weight: "250g",
    },
  },
  {
    id: "5",
    name: "Apple Watch Ultra 2",
    description:
      "The most rugged and capable Apple Watch. Built for exploration, adventure, and endurance.",
    price: 799,
    image:
      "https://images.unsplash.com/photo-1434493789847-2f02dc6ca35d?w=400&h=400&fit=crop",
    images: [
      "https://images.unsplash.com/photo-1434493789847-2f02dc6ca35d?w=800&h=800&fit=crop",
    ],
    category: "accessories",
    brand: "Apple",
    rating: 4.8,
    reviewCount: 892,
    inStock: true,
    specifications: {
      Display: "49mm Always-On Retina LTPO OLED",
      Chip: "S9 SiP",
      "Water Resistance": "100m",
      Battery: "Up to 36 hours",
      Material: "Titanium",
    },
  },
  {
    id: "6",
    name: "PlayStation 5",
    description:
      "Experience lightning-fast loading, deeper immersion with haptic feedback, and stunning games.",
    price: 499,
    image:
      "https://images.unsplash.com/photo-1606813907291-d86efa9b94db?w=400&h=400&fit=crop",
    images: [
      "https://images.unsplash.com/photo-1606813907291-d86efa9b94db?w=800&h=800&fit=crop",
    ],
    category: "gaming",
    brand: "Sony",
    rating: 4.9,
    reviewCount: 5621,
    inStock: true,
    featured: true,
    specifications: {
      CPU: "AMD Zen 2, 8 cores",
      GPU: "10.28 TFLOPs RDNA 2",
      Storage: "825GB SSD",
      Resolution: "Up to 4K 120Hz",
      "Ray Tracing": "Yes",
    },
  },
  {
    id: "7",
    name: "Sony Alpha A7 IV",
    description:
      "Full-frame mirrorless camera with outstanding photo and video capabilities.",
    price: 2498,
    image:
      "https://images.unsplash.com/photo-1516035069371-29a1b244cc32?w=400&h=400&fit=crop",
    images: [
      "https://images.unsplash.com/photo-1516035069371-29a1b244cc32?w=800&h=800&fit=crop",
    ],
    category: "cameras",
    brand: "Sony",
    rating: 4.8,
    reviewCount: 743,
    inStock: true,
    specifications: {
      Sensor: "33MP Full-Frame Exmor R CMOS",
      ISO: "100-51200",
      Video: "4K 60p 10-bit",
      Autofocus: "759 phase-detection points",
      Stabilization: "5-axis IBIS",
    },
  },
  {
    id: "8",
    name: "Dell XPS 15",
    description:
      "Premium laptop with stunning 4K OLED display and powerful Intel Core i9 processor.",
    price: 1899,
    image:
      "https://images.unsplash.com/photo-1593642632559-0c6d3fc62b89?w=400&h=400&fit=crop",
    images: [
      "https://images.unsplash.com/photo-1593642632559-0c6d3fc62b89?w=800&h=800&fit=crop",
    ],
    category: "laptops",
    brand: "Dell",
    rating: 4.6,
    reviewCount: 1124,
    inStock: true,
    specifications: {
      Display: "15.6-inch 4K OLED",
      Processor: "Intel Core i9-13900H",
      Memory: "32GB DDR5",
      Storage: "1TB NVMe SSD",
      Graphics: "NVIDIA RTX 4060",
    },
  },
  {
    id: "9",
    name: "AirPods Pro 2",
    description:
      "Rebuilt from the sound up with H2 chip for smarter noise cancellation and immersive sound.",
    price: 249,
    image:
      "https://images.unsplash.com/photo-1588423771073-b8903fbb85b5?w=400&h=400&fit=crop",
    images: [
      "https://images.unsplash.com/photo-1588423771073-b8903fbb85b5?w=800&h=800&fit=crop",
    ],
    category: "audio",
    brand: "Apple",
    rating: 4.8,
    reviewCount: 4523,
    inStock: true,
    specifications: {
      Chip: "Apple H2",
      "Active Noise Cancellation": "Yes",
      "Battery Life": "6 hours (30 with case)",
      "Water Resistance": "IPX4",
      "Spatial Audio": "Personalized",
    },
  },
  {
    id: "10",
    name: "Nintendo Switch OLED",
    description: "Play at home or on the go with a vibrant 7-inch OLED screen.",
    price: 349,
    image:
      "https://images.unsplash.com/photo-1578303512597-81e6cc155b3e?w=400&h=400&fit=crop",
    images: [
      "https://images.unsplash.com/photo-1578303512597-81e6cc155b3e?w=800&h=800&fit=crop",
    ],
    category: "gaming",
    brand: "Nintendo",
    rating: 4.7,
    reviewCount: 2891,
    inStock: true,
    specifications: {
      Display: "7-inch OLED",
      Storage: "64GB",
      Battery: "4.5-9 hours",
      Connectivity: "Wi-Fi, Bluetooth, USB-C",
      Modes: "TV, Tabletop, Handheld",
    },
  },
  {
    id: "11",
    name: "Google Pixel 8 Pro",
    description:
      "The best of Google with advanced AI features, stunning camera, and 7 years of updates.",
    price: 999,
    image:
      "https://images.unsplash.com/photo-1598327105666-5b89351aff97?w=400&h=400&fit=crop",
    images: [
      "https://images.unsplash.com/photo-1598327105666-5b89351aff97?w=800&h=800&fit=crop",
    ],
    category: "phones",
    brand: "Google",
    rating: 4.7,
    reviewCount: 1567,
    inStock: true,
    specifications: {
      Display: "6.7-inch LTPO OLED",
      Chip: "Google Tensor G3",
      Storage: "128GB",
      Camera: "50MP Main + 48MP Ultrawide",
      Battery: "5050mAh",
    },
  },
  {
    id: "12",
    name: "Bose QuietComfort Ultra",
    description:
      "World-class noise cancellation meets spatial audio for an immersive listening experience.",
    price: 429,
    image:
      "https://images.unsplash.com/photo-1546435770-a3e426bf472b?w=400&h=400&fit=crop",
    images: [
      "https://images.unsplash.com/photo-1546435770-a3e426bf472b?w=800&h=800&fit=crop",
    ],
    category: "audio",
    brand: "Bose",
    rating: 4.6,
    reviewCount: 1834,
    inStock: false,
    specifications: {
      "Noise Cancellation": "World-class ANC",
      "Spatial Audio": "Bose Immersive Audio",
      "Battery Life": "24 hours",
      Connectivity: "Bluetooth 5.3",
      Weight: "250g",
    },
  },
];

export const getProductById = (id: string): Product | undefined => {
  return products.find((p) => p.id === id);
};

export const getProductsByCategory = (categoryId: string): Product[] => {
  return products.filter((p) => p.category === categoryId);
};

export const getFeaturedProducts = (): Product[] => {
  return products.filter((p) => p.featured);
};

export const brands = [
  "Apple",
  "Samsung",
  "Sony",
  "Dell",
  "Google",
  "Bose",
  "Nintendo",
];
