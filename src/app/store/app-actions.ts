import { createAction, props } from '@ngrx/store';
import { Product, ProductCategory, User } from '../models';

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
  `${ProductCategoryComponent} Load`,
  props<{ productCategories: ProductCategory[] }>()
);

const ProductComponent = '[Product]';

export const fetchProducts = createAction(`${ProductComponent} Fetch`);

export const loadProducts = createAction(
  `${ProductComponent} Load`,
  props<{ products: Product[] }>()
);
