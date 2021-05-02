import { on } from '@ngrx/store';
import { createImmerReducer } from 'ngrx-immer/store';
import { ProductCategory, User } from '../models';
import { createEntityAdapter, EntityAdapter } from '@ngrx/entity';
import {
  fetchProductCategories,
  fetchUsers,
  loadProductCategories,
  loadUsers,
} from './app-actions';

// User
export const userAdapter: EntityAdapter<User> = createEntityAdapter<User>();

export const usersReducer = createImmerReducer(
  {
    entities: {},
    ids: [],
    selectedUserId: null,
    isLoading: false,
  },
  on(fetchUsers, (state) => {
    state.isLoading = true;
    return state;
  }),
  on(loadUsers, (state, { users }) => {
    state = userAdapter.setAll(users, state);
    state.isLoading = false;
    return state;
  })
);

export const userSelectors = userAdapter.getSelectors();

// ProductCategory
export const productsCategoryAdapter: EntityAdapter<ProductCategory> = createEntityAdapter<ProductCategory>();

export const productsCategorysReducer = createImmerReducer(
  {
    entities: {},
    ids: [],
    selectedProductCategoryId: null,
    isLoading: false,
  },
  on(fetchProductCategories, (state) => {
    state.isLoading = true;
    return state;
  }),
  on(loadProductCategories, (state, { productCategories }) => {
    state = productsCategoryAdapter.setAll(productCategories, state);
    state.isLoading = false;
    return state;
  })
);

export const productsCategorySelectors = productsCategoryAdapter.getSelectors();
