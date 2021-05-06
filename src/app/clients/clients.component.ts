import { Component } from '@angular/core';
import { query } from 'rx-query';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-clients',
  templateUrl: './clients.component.html',
  styleUrls: ['./clients.component.scss'],
})
export class ClientsComponent {
  public query$ = query(
    ClientsComponent.toString(),
    this.dataService.getClient$
  );
  public displayedColumns = ['id', 'fullName'];

  constructor(private dataService: DataService) {}
}
