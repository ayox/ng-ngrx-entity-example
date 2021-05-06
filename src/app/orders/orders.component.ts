import { Component } from '@angular/core';
import { query } from 'rx-query';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.scss'],
})
export class OrdersComponent {
  public query$ = query(OrdersComponent.toString(), this.dataService.getOrder$);
  public displayedColumns = ['id', 'client'];

  constructor(private dataService: DataService) {}
}
