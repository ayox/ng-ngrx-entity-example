import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { EMPTY } from 'rxjs';
import { catchError, map, mergeMap } from 'rxjs/operators';
import { DataService } from '../services/data.service';
import { fetchUsers, usersLoaded } from './users.actions';

@Injectable()
export class UsersEffects {
  loadUsers$ = createEffect(() =>
    this.actions$.pipe(
      ofType(fetchUsers),
      mergeMap(() =>
        this.dataService.getUsers$().pipe(
          map((users) => usersLoaded({ payload: users })),
          catchError(() => EMPTY)
        )
      )
    )
  );

  constructor(private actions$: Actions, private dataService: DataService) {}
}
