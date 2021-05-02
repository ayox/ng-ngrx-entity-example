import { on } from '@ngrx/store';
import { fetchUsers, usersLoaded } from './users.actions';
import { UserState } from '../store';
import { createImmerReducer } from 'ngrx-immer/store';

export const initialState: UserState = {
  users: [],
  isLoading: false,
};

export const usersReducer = createImmerReducer(
  initialState,
  on(fetchUsers, (state) => {
    state.isLoading = true;
    return state;
  }),
  on(usersLoaded, (state, action) => {
    state.users = action.payload;
    state.isLoading = false;
    return state;
  })
);
