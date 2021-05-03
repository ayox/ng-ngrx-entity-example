import { Component, OnInit } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Product } from '../models';
import { Store } from '@ngrx/store';
import {
  AppState,
  selectAllProduct,
  selectLoadingProduct,
} from '../store/app-store';
import { fetchProducts } from '../store/app-actions';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss'],
})
export class ProductsComponent implements OnInit {
  public dataSource$: Observable<Product[]> = of([]);
  public isLoading$ = of(false);
  public displayedColumns = ['id', 'name'];

  constructor(private store: Store<AppState>) {}

  ngOnInit(): void {
    this.store.dispatch(fetchProducts());

    this.dataSource$ = this.store.select(selectAllProduct);

    this.isLoading$ = this.store.select(selectLoadingProduct);
  }
}
