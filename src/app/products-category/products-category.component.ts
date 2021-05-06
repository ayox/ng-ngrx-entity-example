import { Component } from '@angular/core';
import { query } from 'rx-query';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-products-category',
  templateUrl: './products-category.component.html',
  styleUrls: ['./products-category.component.scss'],
})
export class ProductsCategoryComponent {
  public displayedColumns = ['id', 'name'];
  public productsCategoryQuery$ = query(
    ProductsCategoryComponent.toString(),
    this.dataService.getProductType$
  );

  constructor(private dataService: DataService) {}
}
