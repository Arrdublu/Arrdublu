
export type Service = {
  id: string;
  name: string;
  category: 'SEO' | 'Creative' | 'Lifestyle';
  description: string;
  price: number;
  image: string;
  previews: string[];
};

export type OrderItem = {
  itemId: string;
  name: string;
  price: number;
  quantity: number;
};

export type Order = {
  id: string;
  date: string;
  total: number;
  status: 'paid' | 'pending' | 'cancelled';
  items: OrderItem[];
  discountCode?: string;
  discountAmount?: number;
};

export type CartItem = {
  service: Service;
  quantity: number;
};

export type Discount = {
  id: string;
  code: string;
  type: 'percentage' | 'fixed';
  value: number;
};
