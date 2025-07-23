export type Service = {
  id: string;
  name: string;
  category: 'SEO' | 'Creative' | 'Lifestyle';
  description: string;
  price: number;
  image: string;
  previews: string[];
};

export type Order = {
  id: string;
  date: string;
  total: number;
  status: 'Completed' | 'Processing' | 'Cancelled';
  items: {
    service: Pick<Service, 'id' | 'name' | 'price' | 'image'>;
    quantity: number;
  }[];
};

export type CartItem = {
  service: Service;
  quantity: number;
};
