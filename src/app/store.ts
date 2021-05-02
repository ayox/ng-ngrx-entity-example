import { createSelector } from '@ngrx/store';
import { User } from './models';
import { EntityState } from '@ngrx/entity';
import { selectAllUsers } from './users/users.reducer';

export interface UserState extends EntityState<User> {
  selectedUserId: number | null;
  isLoading: boolean;
}

export interface AppState {
  users: UserState;
}

export const selectUsers = (state: AppState) => state.users;

export const selectAllUsersS = createSelector(selectUsers, selectAllUsers);

export const selectLoadingUsers = createSelector(
  selectUsers,
  (state) => state.isLoading
);
