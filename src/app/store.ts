import { createSelector } from '@ngrx/store';
import { User } from './models';

export interface UserState {
  users: User[];
  isLoading: boolean;
}
export interface AppState {
  users: UserState;
}

export const selectUsers = (state: AppState) => state.users;

export const selectAllUsers = createSelector(
  selectUsers,
  (state) => state.users
);

export const selectLoadingUsers = createSelector(
  selectUsers,
  (state) => state.isLoading
);
