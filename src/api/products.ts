export type Product = {
  id: number;
  name: string;
  category: string;
  price: number;
  rating: number;
  description: string;
  emoji: string;
};

const products: Product[] = [
  {
    id: 1,
    name: 'Hotsilog',
    category: 'Rice Bowl',
    price: 70,
    rating: 4.8,
    description: 'Garlic fried rice with hotdog and sunny-side-up egg.',
    emoji: '🍳',
  },
  {
    id: 2,
    name: 'Baconsilog',
    category: 'Rice Bowl',
    price: 95,
    rating: 4.9,
    description: 'Garlic fried rice with crispy bacon and sunny-side-up egg.',
    emoji: '🥓',
  },
  {
    id: 3,
    name: 'Chicken Rice Bowl',
    category: 'Rice Bowl',
    price: 120,
    rating: 4.7,
    description: 'Steamed rice with crispy chicken, egg, and sauce.',
    emoji: '🍗',
  },
  {
    id: 4,
    name: 'Mango Juice',
    category: 'Drinks',
    price: 60,
    rating: 4.6,
    description: 'Fresh, sweet mango juice made for a quick refresh.',
    emoji: '🥭',
  },
  {
    id: 5,
    name: 'Orange Juice',
    category: 'Drinks',
    price: 60,
    rating: 4.5,
    description: 'Freshly squeezed orange juice with a bright citrus finish.',
    emoji: '🍊',
  },
  {
    id: 6,
    name: 'Beef Burger',
    category: 'Burgers',
    price: 80,
    rating: 4.8,
    description: 'Juicy beef patty with lettuce, tomato, and cheese.',
    emoji: '🍔',
  },
  {
    id: 7,
    name: 'Cheese Burger',
    category: 'Burgers',
    price: 90,
    rating: 4.9,
    description: 'Classic burger with melted cheese and a savory bite.',
    emoji: '🍔',
  },
  {
    id: 8,
    name: 'Barbecue Fries',
    category: 'Fries',
    price: 50,
    rating: 4.7,
    description: 'Golden crispy fries tossed in smoky barbecue seasoning.',
    emoji: '🍟',
  },
];

export async function getProducts(): Promise<Product[]> {
  return Promise.resolve(products);
}
