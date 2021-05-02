export interface User {
  id: string;
  username: string;
}

export interface Product {
  id: string;
  name: string;
  price: string;
  unit?: number;
  productCategory: ProductCategory[];
}

export interface ProductCategory {
  id: string;
  name: string;
}

export interface Order {
  id: string;
  client: Client;
  items: Product[];
}

export interface Client {
  id: string;
  username: string;
  orders: Order[];
  user: User;
}

export const data: {
  users: User[];
  product: Product[];
  productCategory: ProductCategory[];
  order: Order[];
  client: Client[];
} = {
  client: [],
  order: [],
  product: [],
  productCategory: [],
  users: [
    { id: '1', username: 'test' },
    { id: '2', username: '342' },
    { id: '3', username: 'user 1 ' },
  ],
};
