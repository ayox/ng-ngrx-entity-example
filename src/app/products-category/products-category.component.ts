import { Component, OnInit } from '@angular/core';
import { Observable, of } from 'rxjs';
import { ProductCategory } from '../models';
import { Store } from '@ngrx/store';
import { fetchProductCategories } from '../store/app-actions';
import {
  AppState,
  selectAllProductCategories,
  selectLoadingProductCategories,
} from '../store/app-store';

@Component({
  selector: 'app-products-category',
  templateUrl: './products-category.component.html',
  styleUrls: ['./products-category.component.scss'],
})
export class ProductsCategoryComponent implements OnInit {
  public dataSource$: Observable<ProductCategory[]> = of([]);
  public isLoading$ = of(false);
  public displayedColumns = ['id', 'username'];

  constructor(private store: Store<AppState>) {}

  ngOnInit(): void {
    this.store.dispatch(fetchProductCategories());

    this.dataSource$ = this.store.select(selectAllProductCategories);

    this.isLoading$ = this.store.select(selectLoadingProductCategories);
  }
}
