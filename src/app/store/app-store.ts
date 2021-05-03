import { createSelector } from '@ngrx/store';
import { Product, ProductCategory, User } from '../models';
import { EntityState } from '@ngrx/entity';
import {
  productsCategorySelectors,
  productsSelectors,
  userSelectors,
} from './app-reducer';

export interface AppState {
  users: UserState;
  productCategories: ProductCategoryState;
  products: ProductState;
}

// UserState
export interface UserState extends EntityState<User> {
  selectedUserId: number | null;
  isLoading: boolean;
}

export const selectUsersState = (state: AppState) => state.users;

export const selectAllUsers = createSelector(
  selectUsersState,
  userSelectors.selectAll
);

export const selectLoadingUsers = createSelector(
  selectUsersState,
  (state) => state.isLoading
);

// ProductCategoryState
export interface ProductCategoryState extends EntityState<ProductCategory> {
  selectedProductCategoryId: number | null;
  isLoading: boolean;
}

export const selectProductCategoriesState = (state: AppState) =>
  state.productCategories;

export const selectAllProductCategories = createSelector(
  selectProductCategoriesState,
  productsCategorySelectors.selectAll
);

export const selectLoadingProductCategories = createSelector(
  selectProductCategoriesState,
  (state) => state.isLoading
);

// ProductState
export interface ProductState extends EntityState<Product> {
  selectedProductCategoryId: number | null;
  isLoading: boolean;
}

export const selectProductState = (state: AppState) => state.products;

export const selectAllProduct = createSelector(
  selectProductState,
  productsSelectors.selectAll
);

export const selectLoadingProduct = createSelector(
  selectProductState,
  (state) => state.isLoading
);
