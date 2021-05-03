import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { EMPTY } from 'rxjs';
import { catchError, map, mergeMap } from 'rxjs/operators';
import { DataService } from '../services/data.service';
import {
  fetchProductCategories,
  fetchProducts,
  fetchUsers,
  loadProductCategories,
  loadProducts,
  loadUsers,
} from './app-actions';

@Injectable()
export class AppEffects {
  loadUsers$ = createEffect(() =>
    this.actions$.pipe(
      ofType(fetchUsers),
      mergeMap(() =>
        this.dataService.getUsers$().pipe(
          map((users) => loadUsers({ users })),
          catchError(() => EMPTY)
        )
      )
    )
  );

  loadProductCategories$ = createEffect(() =>
    this.actions$.pipe(
      ofType(fetchProductCategories),
      mergeMap(() =>
        this.dataService.getProductType$().pipe(
          map((productCategories) =>
            loadProductCategories({ productCategories })
          ),
          catchError(() => EMPTY)
        )
      )
    )
  );

  loadProduct$ = createEffect(() =>
    this.actions$.pipe(
      ofType(fetchProducts),
      mergeMap(() =>
        this.dataService.getProduct$().pipe(
          map((products) => loadProducts({ products })),
          catchError(() => EMPTY)
        )
      )
    )
  );

  constructor(private actions$: Actions, private dataService: DataService) {}
}
