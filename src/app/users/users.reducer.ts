import { on } from '@ngrx/store';
import { fetchUsers, loadUsers } from './users.actions';
import { UserState } from '../store';
import { createImmerReducer } from 'ngrx-immer/store';
import { User } from '../models';
import { createEntityAdapter, EntityAdapter } from '@ngrx/entity';

export const userAdapter: EntityAdapter<User> = createEntityAdapter<User>();

export const initialState: UserState = {
  entities: {},
  ids: [],
  selectedUserId: null,
  isLoading: false,
};

export const usersReducer = createImmerReducer(
  initialState,
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

export const getSelectedUserId = (state: UserState) => state.selectedUserId;

// get the selectors
const { selectIds, selectAll } = userAdapter.getSelectors();

// select the array of user ids
export const selectUserIds = selectIds;

// select the array of users
export const selectAllUsers = selectAll;
