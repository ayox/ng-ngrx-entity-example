import { on } from '@ngrx/store';
import { createImmerReducer } from 'ngrx-immer/store';
import { Product, ProductCategory, User } from '../models';
import { createEntityAdapter, EntityAdapter } from '@ngrx/entity';
import {
  fetchProductCategories,
  fetchProducts,
  fetchUsers,
  loadProductCategories,
  loadProducts,
  loadUsers,
} from './app-actions';

// User
export const userAdapter: EntityAdapter<User> = createEntityAdapter<User>();

const initialState = {
  entities: {},
  ids: [],
  selectedId: null,
  isLoading: false,
};

const loadingReducer = (state: any) => {
  state.isLoading = true;
  return state;
};

export const usersReducer = createImmerReducer(
  initialState,
  on(fetchUsers, loadingReducer),
  on(loadUsers, (state, { users }) => {
    state = userAdapter.setAll(users, state);
    state.isLoading = false;
    return state;
  })
);

export const userSelectors = userAdapter.getSelectors();

// ProductCategory
export const productsCategoryAdapter: EntityAdapter<ProductCategory> = createEntityAdapter<ProductCategory>();

export const productsCategoriesReducer = createImmerReducer(
  initialState,
  on(fetchProductCategories, loadingReducer),
  on(loadProductCategories, (state, { productCategories }) => {
    state = productsCategoryAdapter.setAll(productCategories, state);
    state.isLoading = false;
    return state;
  })
);

export const productsCategorySelectors = productsCategoryAdapter.getSelectors();

// Products
export const productsAdapter: EntityAdapter<Product> = createEntityAdapter<Product>();

export const productsReducer = createImmerReducer(
  initialState,
  on(fetchProducts, loadingReducer),
  on(loadProducts, (state, { products }) => {
    state = productsAdapter.setAll(products, state);
    state.isLoading = false;
    return state;
  })
);

export const productsSelectors = productsAdapter.getSelectors();
