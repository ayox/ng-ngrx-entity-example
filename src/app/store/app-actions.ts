import { createAction, props } from '@ngrx/store';
import { ProductCategory, User } from '../models';

const UserComponent = '[Users]';

export const fetchUsers = createAction(`${UserComponent} Fetch`);

export const loadUsers = createAction(
  `${UserComponent} Load Users`,
  props<{ users: User[] }>()
);

const ProductCategoryComponent = '[Product Category]';

export const fetchProductCategories = createAction(
  `${ProductCategoryComponent} Fetch`
);

export const loadProductCategories = createAction(
  `${ProductCategoryComponent} Load Users`,
  props<{ productCategories: ProductCategory[] }>()
);
