import { createAction, props } from '@ngrx/store';
import { User } from '../models';

const Component = '[Users]';

export const fetchUsers = createAction(`${Component} Fetch`);
export const usersLoaded = createAction(
  `${Component} Loaded`,
  props<{ payload: User[] }>()
);

export const loadUsers = createAction(
  '[User/API] Load Users',
  props<{ users: User[] }>()
);
