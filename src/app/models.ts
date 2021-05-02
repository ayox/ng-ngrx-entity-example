export interface User {
  id: string;
  username: string;
}

export interface Product {
  id: string;
  name: string;
  price: number;
  unit?: number;
  productCategory: ProductCategory;
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
  fullName: string;
  user: User;
}

export const data: {
  users: User[];
  product: Product[];
  productCategory: ProductCategory[];
  order: Order[];
  client: Client[];
} = {
  client: [
    {
      id: '1',
      fullName: 'aymen',
      user: { id: '33', username: 'user 1 ' },
    },
    {
      id: '1',
      fullName: 'ahmed',
      user: { id: '1', username: 'test' },
    },
  ],
  order: [
    {
      id: '1',
      client: {
        id: '1',
        fullName: 'aymen',
        user: { id: '33', username: 'user 1 ' },
      },
      items: [
        {
          id: '1',
          name: 'string',
          price: 1000,
          unit: 10,
          productCategory: {
            id: '1',
            name: 'test',
          },
        },
        {
          id: '2',
          name: 'string',
          price: 4020,
          unit: 3,
          productCategory: {
            id: '2',
            name: 'test2',
          },
        },
      ],
    },
  ],
  product: [
    {
      id: '1',
      name: 'string',
      price: 2300,
      unit: 1,
      productCategory: {
        id: '1',
        name: 'test',
      },
    },
    {
      id: '2',
      name: 'string',
      price: 4020,
      unit: 1,
      productCategory: {
        id: '2',
        name: 'test2',
      },
    },
    {
      id: '3',
      name: 'string',
      price: 3949,
      unit: 1,
      productCategory: {
        id: '1',
        name: 'test',
      },
    },
  ],
  productCategory: [
    {
      id: '2',
      name: 'test2',
    },
    {
      id: '1',
      name: 'test',
    },
  ],
  users: [
    { id: '33', username: 'user 1 ' },
    { id: '1', username: 'test' },
    { id: '2', username: '342' },
    { id: '42', username: 'user 3 ' },
    { id: '34', username: 'user 232 ' },
    { id: '22', username: 'user 124 ' },
  ],
};
