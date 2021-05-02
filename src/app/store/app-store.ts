import { createSelector } from '@ngrx/store';
import { ProductCategory, User } from '../models';
import { EntityState } from '@ngrx/entity';
import { productsCategorySelectors, userSelectors } from './app-reducer';

export interface UserState extends EntityState<User> {
  selectedUserId: number | null;
  isLoading: boolean;
}

export interface ProductCategoryState extends EntityState<ProductCategory> {
  selectedProductCategoryId: number | null;
  isLoading: boolean;
}

export interface AppState {
  users: UserState;
  productCategories: ProductCategoryState;
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
