import { Component } from '@angular/core';

import { query } from 'rx-query';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss'],
})
export class ProductsComponent {
  public displayedColumns = ['id', 'name', 'price', 'unit', 'category'];
  public products$ = query(
    ProductsComponent.toString(),
    this.dataService.getProduct$
  );

  constructor(private dataService: DataService) {}
}
